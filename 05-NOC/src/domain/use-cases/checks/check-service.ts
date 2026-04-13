import { error } from "node:console";
import { LogRepository } from "../../repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";


interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallBack = (() => void) | undefined;
type ErrorCallBack = ((error: string) => void ) | undefined;


export class CheckService implements CheckServiceUseCase {

   
    constructor(  
        private readonly logRepository: LogRepository,
        private readonly successCallBack: SuccessCallBack,
        private readonly errorCallBack: ErrorCallBack) 
        
        {


    }


    public async execute(url: string): Promise<boolean> {
       
        try {
            const response = await fetch(url);     
            if (!response.ok) {
                throw new Error(`Error en la respuesta de ${url}:`);
                
            } 

            const log = new LogEntity(`Service ${url} working`, LogSeverityLevel.low);
            this.logRepository.saveLog(log);
            this.successCallBack && this.successCallBack();
           // console.log(`La solicitud a ${url} fue exitosa.`);
            return true;
        }
        catch (error) {
            
            const errorMessage = `${error}`

             const log = new LogEntity(`Service ${url} failed: ${errorMessage}`, LogSeverityLevel.high);
            this.logRepository.saveLog(log);


            this.errorCallBack && this.errorCallBack(errorMessage);
           // console.error(`Error al realizar la solicitud a ${url}:`, error);
            return false;
        }

       return true;
    }

}