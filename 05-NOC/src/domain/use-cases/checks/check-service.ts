import { error } from "node:console";


interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}


export class CheckService implements CheckServiceUseCase {

   
    public async execute(url: string): Promise<boolean> {
       
        try {
            const response = await fetch(url);     
            if (!response.ok) {
                throw new Error(`Error en la respuesta de ${url}:`);
                
            } 
            console.log(`La solicitud a ${url} fue exitosa.`);
            return true;
        }
        catch (error) {
            console.error(`Error al realizar la solicitud a ${url}:`, error);
            return false;
        }

       return true;
    }

}