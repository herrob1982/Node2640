import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";


const fileSystemLogRepository = new LogRepositoryImpl( new FileSystemDataSource() );



export class Server {

    static start() {
        console.log("Servidor iniciado...");

        CronService.startJob(
             '*/2 * * * * *', 
             () => {
                        new CheckService(
                            fileSystemLogRepository,
                         () => console.log("Éxito en la solicitud a Google"),
                            (error) => console.error("Error en la solicitud a Google:", error)
                        ).execute("https://www.google.com");
                }
            );

             CronService.startJob(
             '*/5 * * * * *', 
             () => {
                        new CheckService(
                            fileSystemLogRepository,
                            () => console.log("Éxito en la solicitud a Localhost"),
                            (error) => console.error("Error en la solicitud a Localhost:", error)
                        ).execute("http://localhost:3000/posts");
                    }
            );

            //  CronService.startJob(
            //  '*/3 * * * * *', 
            //  () => {
            //             console.log('Tarea programada ejecutada cada 3 segundos');
            //         }
            // );




    }

}


