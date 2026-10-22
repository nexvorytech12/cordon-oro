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

El briefing menciona un logo adjunto, pero el archivo no fue incluido. El encabezado usa una marca tipográfica temporal. Cuando se entregue el logo original, debe guardarse en `public/assets/logo-cordon-de-oro.*` y sustituirse en el componente `Brand` sin modificar sus colores ni proporciones.

## Imágenes de referencia

Las imágenes incluidas fueron generadas como material demostrativo para este proyecto. No representan trabajos reales ni instalaciones verificadas de la empresa. Se recomienda reemplazarlas por fotografías propias del taller y de pedidos terminados antes del lanzamiento público final.

## Formulario y WhatsApp

El formulario valida los campos principales y genera un mensaje estructurado para `wa.me/51928821229`. No sube archivos; el sitio indica expresamente que las imágenes de referencia deben adjuntarse en el chat de WhatsApp.
