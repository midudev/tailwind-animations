# Guía de ejecución y despliegue del proyecto

## Información importante

Este proyecto utiliza **pnpm** como gestor de paquetes y está basado en **Astro**. Se recomienda seguir los pasos en el orden indicado para evitar errores.

Antes de ejecutar el proyecto, asegúrate de contar con:

- Node.js (versión recomendada: 18 o superior)
- pnpm instalado globalmente

---

## Pasos previos (Ramas) (*Recomendación)

Antes de correr el proyecto si necesitas hacer cambios grandes en la estructura del proyecto, es recomendable, crear una nueva rama y hacer los cambios en dicha rama git:

``` bash
git checkout -b [nombre-rama]
```

Si se daña algo de la web, se puede eliminar la rama y la rama principal estará en buen estado:

``` bash
git branch -d [nombre-rama]
````

> Si no conoces bien los comandos git, información extra del funcionamiento/comandos de git investigar.

---

## Pasos para ejecutar el proyecto en desarrollo

1. Instalar dependencias:

``` bash
pnpm install
```

2. Ejecutar el proyecto (paquete `web`):

``` bash
pnpm --filter web dev
```

3. Agregar Tailwind CSS (solo si no está instalado):

``` bash
npx astro add tailwind
```

---

## Notas adicionales

- Si Tailwind ya está configurado, **no es necesario ejecutar el paso 3**.

- El servidor de desarrollo mostrará la URL local en la terminal.

- Ante errores, verifica que las dependencias estén correctamente instaladas.

- Si llegas a crear algún tipo de documentación, Markdownlint para una buena sintaxis de documentación (.md) y ltex para corrección de faltas ortográficas.
