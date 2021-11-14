# Observaciones importantes


## Cómo ejecutar la aplicacion para trabajar a nivel local.

1. ubicarse en el directorio de la app.
2. ejecutar en la linea de comando: npm install
3. ejecutar desde la linea de comando: npm run dev

- **Observación 1**: El paso 2 se debe ejecutar cada vez que un git pull trajo nuevos cambios o se baja por primera vez.
- **Observación 2**: para restaurar las versiones exactas de paquetes segun package-lock.json, ejecutamos npm ci
- **Observación 3**: Si la ejecucion de npm run dev arroja algun error, instalar ts-node globalmente (npm install -g ts-node) y luego ejecutar paso (3).

## Consideraciones para docker

1. Construir imagen basada en Dockerfile: docker build -t \<nombre que quieren dar a la imagen\> .
2. Crear y ejecutar un contenedor basado en la imagen buildeada en paso anterior: docker run -it -p puerto_host:puerto_container \<nombre de la imagen\>

## problemas para ejecutar scripts de package.json cross-platform

Considerar estos links:

- https://docgov.dev/posts/npm-scripts/
- https://www.npmjs.com/package/run-script-os
- https://www.npmjs.com/package/cross-env

---

## Flujo del request

