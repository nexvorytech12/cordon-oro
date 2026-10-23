# Cordón de Oro — sitio corporativo

Sitio responsive desarrollado con React, Vite, TypeScript, Tailwind CSS, Framer Motion y Lucide React.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
npm run preview
```

La salida de producción se genera en `dist/`.

## Contenido editable

- Productos, servicios y galería: `src/data.ts`.
- Número de WhatsApp: constante `whatsappNumber` en `src/data.ts`.
- Textos y secciones principales: `src/App.tsx`.
- Identidad visual y estilos: `src/styles.css`.
- Fotografías demostrativas: `public/assets/`.

## Logo

El logo oficial en PNG transparente está guardado en `public/assets/logo_cordon-de-oro.png` y se utiliza desde el componente `Brand` en el encabezado y el pie de página. Para reemplazarlo en el futuro, conserva ese nombre de archivo, la transparencia, los colores y las proporciones originales.

## Imágenes de referencia

Las imágenes incluidas fueron generadas como material demostrativo para este proyecto. Cada servicio y producto tiene su propio archivo dentro de `public/assets/services/` y `public/assets/products/`. No representan trabajos reales ni instalaciones verificadas de la empresa; pueden reemplazarse por fotografías propias conservando los mismos nombres de archivo.

## Formulario y WhatsApp

El formulario valida los campos principales y genera un mensaje estructurado para `wa.me/51928821229`. No sube archivos; el sitio indica expresamente que las imágenes de referencia deben adjuntarse en el chat de WhatsApp.
