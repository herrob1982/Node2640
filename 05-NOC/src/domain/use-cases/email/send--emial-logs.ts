import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";


interface SendEmailLogsUseCase {

    execute: (to: string | string[]) => Promise<boolean>;
    
}

export class SendEmailLogs implements SendEmailLogsUseCase {


    constructor(

        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository

    ){}

    async execute(to: string | string[]){

        try {
        
            const sent = await this.emailService.sendEmailWithFileSystem(to);
            
            if (!sent) {
                throw new Error("Failed to send email logs");
            }

            const log = new LogEntity({
                    level: LogSeverityLevel.low,
                    message: "Envio exitoso de logs por email",
                    origin: "SendEmailLogs.ts"
                });

            this.logRepository.saveLog(log);
               

        
        } catch (error) {
            
                const log = new LogEntity({
                    level: LogSeverityLevel.high,
                    message: `Failed to send email logs: ${error}`,
                    origin: "SendEmailLogs.ts"
                });

                this.logRepository.saveLog(log);


            return false;
        }


        return true;
    }
    

}