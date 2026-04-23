import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDataBase } from "./data/mongo/";

import { Server } from "./presentation/server";


//funcion autoejecutable
(async() => {
     main();
})();


async function main() {
     
     MongoDataBase.connect({
          mongoUrl: envs.MONGO_URL,
          dbName: envs.MONGO_DB_NAME
     });

     //crear un registro de log en la base de datos

//      const newLog = await LogModel.create({
//           message: "Servidor iniciado",
//           level: "low",
//           origin: "app.ts"
//      });

//      //await newLog.save();
//     // console.log("Log creado:", newLog);

//     const result = await LogModel.find();
//     console.log("Logs encontrados:", result);


     
     
   //  Server.start();
//console.log('email:' + process.env.MAILER_EMAIL);
// console.log('port:' + envs.PORT);
// console.log('prod:' + envs.PROD);
// console.log('email:' + envs.MAILER_EMAIL);
// console.log('secret key:' + envs.MAILER_SECRET_KEY);


}

