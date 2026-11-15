#!/usr/bin/env python3
"""Export opted-in Gram posts from a Mobile Networks 4.0.0 world."""

import argparse
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import tempfile

MARKER = re.compile(r"(?:^|\s)#ZonaCeroWeb\s*$", re.IGNORECASE)
GRAM_ID = re.compile(r"[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}")
PHOTO_FILENAME = re.compile(r"[0-9a-f]{32}\.jpg")
MAX_PHOTO_BYTES = 3 * 1024 * 1024


def read_record(directory, ident):
    if not isinstance(ident, str) or not GRAM_ID.fullmatch(ident):
        return {}
    path = directory / f"{ident}.json"
    if path.is_symlink() or not path.is_file():
        return {}
    with path.open(encoding="utf-8") as file:
        record = json.load(file)
    return record if isinstance(record, dict) else {}


def copy_photo(source, output, ident, photo_id):
    if not isinstance(photo_id, str) or not GRAM_ID.fullmatch(photo_id):
        return None
    path = source / "media" / f"{photo_id}.jpg"
    if path.is_symlink() or not path.is_file():
        return None
    with path.open("rb") as file:
        photo = file.read(MAX_PHOTO_BYTES + 1)
    if len(photo) > MAX_PHOTO_BYTES or not photo.startswith(b"\xff\xd8\xff"):
        return None
    fingerprint = hashlib.sha256(ident.encode() + photo).hexdigest()[:32]
    name = f"{fingerprint}.jpg"
    target = output / "gram-media" / name
    if not target.is_file():
        atomic_write(target, photo)
    return f"gram-media/{name}"


def atomic_write(path, content):
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as file:
        temporary = Path(file.name)
        file.write(content)
    try:
        temporary.chmod(0o644)
        os.replace(temporary, path)
    finally:
        temporary.unlink(missing_ok=True)


def read_posts(source):
    for path in (source / "posts").glob("*.json"):
        post = read_record(path.parent, path.stem)
        caption = post.get("caption")
        if not isinstance(caption, str) or not (marker := MARKER.search(caption)):
            continue
        ident, created = post.get("id"), post.get("created")
        if ident != path.stem or type(created) is not int or not 0 < created < 4102444800000:
            continue
        author = read_record(source / "accounts", post.get("author")).get("name")
        if not isinstance(author, str) or not author.strip():
            continue
        yield created, ident, author.strip()[:80], caption[:marker.start()].strip(), post.get("photos")


def export(world, output):
    source = world / "data" / "mobilenetworks_gram"
    if not all((source / name).is_dir() for name in ("posts", "accounts", "media")):
        raise ValueError("No se encontraron los datos de Gram. Comprueba la carpeta del mundo y que Gram se haya iniciado.")
    if output == world or world in output.parents:
        raise ValueError("Usa una carpeta web separada del mundo de Minecraft.")
    media = output / "gram-media"
    media.mkdir(parents=True, exist_ok=True)
    posts, retained = [], set()
    for created, ident, author, caption, photos in sorted(read_posts(source), reverse=True)[:24]:
        photo_urls = []
        for photo_id in photos[:4] if isinstance(photos, list) else []:
            url = copy_photo(source, output, ident, photo_id)
            if url:
                photo_urls.append(url)
                retained.add(Path(url).name)
        if caption or photo_urls:
            posts.append({
                "author": author,
                "caption": caption[:1000],
                "publishedAt": datetime.fromtimestamp(created / 1000, timezone.utc).isoformat(),
                "photos": photo_urls,
            })
    feed = {"updatedAt": datetime.now(timezone.utc).isoformat(), "posts": posts}
    atomic_write(output / "gram-feed.json", json.dumps(feed, ensure_ascii=False).encode())
    for photo in media.glob("*.jpg"):
        if PHOTO_FILENAME.fullmatch(photo.name) and photo.name not in retained:
            photo.unlink()
    return len(posts)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--world", required=True, type=Path, help="Minecraft world save directory")
    parser.add_argument("--output", required=True, type=Path, help="Dedicated web output directory")
    args = parser.parse_args()
    try:
        count = export(args.world.resolve(), args.output.resolve())
    except (OSError, ValueError) as error:
        parser.exit(1, f"Error al exportar Gram: {error}\n")
    print(f"Gram: {count} publicaciones exportadas.")


if __name__ == "__main__":
    main()
