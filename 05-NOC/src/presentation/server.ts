import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {

    static start() {
        console.log("Servidor iniciado...");

        CronService.startJob(
             '*/2 * * * * *', 
             () => {
                        new CheckService().execute("https://www.google1.com");
                }
            );

            //  CronService.startJob(
            //  '*/5 * * * * *', 
            //  () => {
            //             console.log('Tarea programada ejecutada cada 5 segundos');
            //         }
            // );

            //  CronService.startJob(
            //  '*/3 * * * * *', 
            //  () => {
            //             console.log('Tarea programada ejecutada cada 3 segundos');
            //         }
            // );




    }

}


