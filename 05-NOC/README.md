
#Node con TypeScript - TS-Node-dev (preferido)
Instalar TypeScript y demás dependencias
    npm i -D typescript @types/node ts-node-dev rimraf
Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
    npx tsc --init --outDir dist/ --rootDir src
Crear scripts para dev, build y start (Más sobre TS-Node-dev aquí)
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"

#dev
1. Clonar el archivo env.template a .env
2. Configurar las variables de entorno

```
MAILER_EMAIL = 
MAILER_SECRET_KEY = 
PORT = 
PROD = 

```