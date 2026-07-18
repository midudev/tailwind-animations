# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.2] - 2026-07-18

### Añadido
- Utilidad **`animate-slide-distance-*`** para personalizar la distancia de recorrido de las animaciones `slide-in-*` / `slide-out-*` (por defecto `20px`).
  - Acepta longitudes y porcentajes, p. ej. `animate-slide-distance-[50%]`, `animate-slide-distance-[6rem]`.
  - Variable CSS: `--tw-anim-slide-distance`.
- Sitio web: **Playground** en `/playground` con composición en vivo, presets de UI y estado compartible por URL.
- Mejoras de SEO, accesibilidad y UX en la web de documentación.

### Cambiado
- Renombrado interno de la API de distancia de slide (antes experimental como `animate-translate`) a **`animate-slide-distance`**.
- Peer dependency de `tailwindcss` alineada a **4.3.2**.

### Corregido
- Cards de ejemplos de dialog en la web ya no disparan el toast de copiado con `animate-null`.

## [1.0.1] - 2026-01

### Cambiado
- Ajustes menores de publicación y paquete scoped deprecado `@midudev/tailwind-animations`.

## [1.0.0] - 2026-01-12

### Añadido
- Soporte nativo para **Tailwind CSS v4**.

### Cambiado
- **Renombre del Paquete**: El paquete ha sido renombrado de `@midudev/tailwind-animations` a `tailwind-animations`.
- **Implementación CSS-only**: El plugin ahora es puramente CSS, eliminando la dependencia de lógica en JavaScript para registrar las animaciones.
- **Estructura del Proyecto**: Los datos de las animaciones para la documentación se han movido a la carpeta de la web (`web/src/data/theme.js`) para mantener el plugin lo más limpio posible.
- **Exportaciones del Paquete**: Se ha actualizado el `package.json` para exportar directamente el archivo CSS.
- **Documentación**: README actualizado con las nuevas instrucciones de uso exclusivas para la v4.

### Eliminado
- **Soporte para Tailwind CSS v3**: Se ha eliminado la compatibilidad con versiones anteriores de Tailwind para simplificar la arquitectura del plugin.
- **Plugin de JavaScript**: Se ha eliminado el archivo `src/theme.js` y la lógica de plugin basada en JS (`src/index.js`), ya que ahora se utiliza la directiva `@plugin` directamente sobre el archivo CSS.

---

## [0.2.0] - Versión anterior estable
- Versión compatible con Tailwind CSS v3 basada en plugins de JavaScript.
