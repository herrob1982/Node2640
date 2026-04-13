import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";


//funcion autoejecutable
(async() => {
     main();
})();


function main() {
    // Server.start();
//console.log('email:' + process.env.MAILER_EMAIL);
console.log('port:' + envs.PORT);
console.log('prod:' + envs.PROD);
console.log('email:' + envs.MAILER_EMAIL);
console.log('secret key:' + envs.MAILER_SECRET_KEY);


}

