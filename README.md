# Zona Cero Atlas

Wiki de Zona Cero publicada en GitHub Pages.

## Tablón de Gram

El atlas consulta el tablón al abrir `gram.html` y cada 30 minutos mientras esté abierta la página. La conexión se configura en `gram-config.json`. Con `"feed": null`, la página indica que está pendiente de conectar.

El exportador lee la estructura de Mobile Networks 4.0.0 para Minecraft 1.20.1. Las publicaciones que terminen en `#ZonaCeroWeb` se comparten en el atlas público con su nombre de Gram, texto, fecha y fotos. El feed omite los otros datos de la cuenta y de la publicación. Si se retira la etiqueta o se elimina la publicación, sale del tablón en la siguiente exportación. La carpeta de salida debe estar dedicada al tablón y el servidor web debe revalidar sus archivos para que se reflejen los cambios.

### Conexión al servidor

1. Ubica la carpeta del mundo. El subdirectorio `data/mobilenetworks_gram` debe contener `posts`, `accounts` y `media` después de iniciar Gram. Ejecuta el exportador donde puedas leer ese mundo o una copia que se actualice.

   ```bash
   python3 exportar_gram.py --world /ruta/al/mundo --output /ruta/web/gram
   ```

2. Programa el mismo comando al minuto 0 y 30 en el panel del alojamiento o mediante cron. Usa las rutas absolutas de tu instalación.

   ```cron
   0,30 * * * * python3 /ruta/al/atlas/exportar_gram.py --world /ruta/al/mundo --output /ruta/web/gram
   ```

3. Sirve la salida por HTTPS con CORS para `https://roborub1.github.io` si está en otro dominio. El nombre `gram-feed.json` y la carpeta relativa `gram-media/` deben quedar juntos. Pon la URL HTTPS de `gram-feed.json` en el campo `feed` de `gram-config.json`.
4. Publica una foto de prueba con el marcador, ejecuta el exportador y comprueba el atlas. Retira la etiqueta y confirma que desaparece después de volver a exportar.

Este flujo requiere Python 3.9 o posterior y acceso de lectura al mundo. El atlas no accede a la carpeta del mundo por HTTP.

La versión del mod está en [Modrinth](https://modrinth.com/mod/mobile-networks/version/MFO6K81h).
