import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send--emial-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


const fsLogRepository = new LogRepositoryImpl( 
    new FileSystemDataSource() 
);

const mongoLogRepository = new LogRepositoryImpl( 
    new MongoLogDataSource() 
);

const postgresLogRepository = new LogRepositoryImpl( 
    new PostgresLogDataSource() 
);

const logRepository = new LogRepositoryImpl( 
    //new FileSystemDataSource() 
    new MongoLogDataSource()
);


export class Server {

    static async start() {
        console.log("Servidor iniciado...");

        CronService.startJob(
             '*/9 * * * * *', 
             () => {
                        new CheckService(
                            logRepository,
                         () => console.log("Éxito en la solicitud a Google"),
                            (error) => console.error("Error en la solicitud a Google:", error)
                        ).execute("https://www.google.com");
                }
            );

            CronService.startJob(
             '*/9 * * * * *', 
             () => {
                        new CheckServiceMultiple(
                            [fsLogRepository, mongoLogRepository, postgresLogRepository],
                         () => console.log("Éxito en la solicitud a Google"),
                            (error) => console.error("Error en la solicitud a Google:", error)
                        ).execute("https://www.google.com");
                }
            );

        //      CronService.startJob(
        //      '*/5 * * * * *', 
        //      () => {
        //                 new CheckService(
        //                     fileSystemLogRepository,
        //                     () => console.log("Éxito en la solicitud a Localhost"),
        //                     (error) => console.error("Error en la solicitud a Localhost:", error)
        //                 ).execute("http://localhost:3000/posts");
        //             }
        //     );

            //  CronService.startJob(
            //  '*/3 * * * * *', 
            //  () => {
            //             console.log('Tarea programada ejecutada cada 3 segundos');
            //         }
            // );
        
        const logs = await logRepository.getLogs(LogSeverityLevel.low);
        console.log("Logs de nivel bajo:", logs);
        

    //   const email = new EmailService(fileSystemLogRepository);  
    //   email.sendEmailWithFileSystem("rchicaiza@sicobra.com");

           // const emailService = new EmailService();

          //  new SendEmailLogs( emailService, logRepository).execute("rchicaiza@sicobra.com");

    }

}


