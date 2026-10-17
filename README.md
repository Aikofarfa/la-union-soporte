# Mesa de ayuda — I.E. La Unión

Sitio estático independiente para el diagnóstico de problemas frecuentes en computadores, red, proyectores, impresoras, audio y cuentas institucionales.

**Repositorio privado:** https://github.com/Aikofarfa/la-union-soporte

El repositorio seleccionado originalmente (`Aikofarfa/troubleshooter-launion`) no forma parte de este proyecto y permanece sin cambios.

## Ejecutar en local

Desde esta carpeta, inicia un servidor estático:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000`. No requiere Node ni proceso de compilación.

## Reportes

El formulario está configurado para enviar mediante Web3Forms al correo de soporte `sebascastroj70@gmail.com`. El envío real depende de Web3Forms y requiere conexión a internet; no se envió ningún reporte durante las pruebas. La clave incluida en `app.js` es una clave de cliente visible en el JavaScript; no añadas credenciales privadas. Si cambias la clave o el destino, actualiza `WEB3FORMS_KEY` e `INBOX` en `app.js`.

## Estructura

- `index.html`: navegación, diagnóstico, guías, contacto y formulario.
- `styles.css`: sistema visual responsive, estados de foco y modo de movimiento reducido.
- `app.js`: flujo de diagnóstico, guías desplegables, formulario y envío.
- `assets/`: favicon y fotografía de apoyo optimizada en WebP.

## Publicación

El repositorio se creó como **privado**. GitHub Pages no se ha configurado ni el sitio se ha publicado públicamente. Si se desea habilitar Pages en el futuro, verifica primero que el plan de GitHub permita publicar Pages desde un repositorio privado y revisa los controles de visibilidad antes de activarlo.

## Diseño y medios

La identidad usa una base cálida color papel, verde bosque y acento lima, con titulares serif de carácter editorial. DM Sans y DM Serif Display se cargan desde Google Fonts con fuentes de respaldo locales. La fotografía de aula es ilustrativa y no representa necesariamente a la I.E. La Unión; confirma sus permisos/licencia antes de publicar o sustitúyela por una imagen institucional aprobada.

## Alcance

El diagnóstico y las guías funcionan íntegramente en el navegador. No hay base de datos, seguimiento de tickets ni panel administrativo. El contenido de horario y correo mantiene los datos presentes en el material de referencia.
