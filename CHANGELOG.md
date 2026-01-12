# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

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
