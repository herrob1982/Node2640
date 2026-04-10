import { Server } from "./presentation/server";


//funcion autoejecutable
(async() => {
     main();
})();


function main() {
     Server.start();
}

