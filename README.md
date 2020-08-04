# PlatziPosts

Proyecto de ejemplo para implementar tests en el curso de testing end-to-end con Cypress

### Instalación

El proyecto require 2 bases de datos de firebase una para su uso normal y otra para ejecutar los tests, cree 2 bases de datos en Firebase y obtenga las credenciales para ambas y crear los archivos `production.env` y `test.env` con la configuración de firebase para cada una de las bases de datos, hay un ejemplo del formato requerido para estos archivos en `config/example-env`.

Luego

``` bash
$ npm install
$ npm run dev
```
### Notas

Instalar cypress (test runner) y pushstate-server (servidor estatico de archivos):
```
npm install cypress -D 
pm install pushstate-server -D
```
Crear tareas en package.json
```
"cypress:open": "cypress open --project ./test", -> Abrir consola de cypress
"build": "cross-env NODE_ENV=production node build/build.js", -> construir paquete para prod
"build:test": "cross-env NODE_ENV=test node build/build.js", -> construir paquete para dev
"test:server": "pushstate-server -d ./dist", -> servidor estatico en path ./dist
"test:init": "npm run test:server", -> iniciar servidor
"test:dev": "npm run build:test && run-p --race test:server cypress:open" -> construye paquete e inicia servidor y consola de cypress en paralelo
```

Definir tareas que corran en paralelo con "run-p" de la dependencia 'npm-run-all'
```
npm install npm-run-all -D
```
package.json:
```
"test:dev": "npm run build:test && run-p --race test:server cypress:open"
```

Omitir errores en editor:

Adicionar en package.json
```
  "standard": {
    "globals": [
        "describe",
        "it",
        "cy"
    ]
  }
```

### Licencia

Copyright 2018 Savvy Apps
Modifications Copyright (C) 2018 Platzi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


