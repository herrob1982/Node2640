
import fs from 'fs';

export interface SaveFileUseCase {

    execute: ( options: SaveFileOptions ) =>boolean;
}

export interface SaveFileOptions {
    fileName: string;
    fileContent: string;
    fileDestination?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor() {
        /**
         * Di dependecy injection   
         */
    }   

    execute (
        {  
            fileContent, 
            fileDestination = 'outputs', 
            fileName = 'table'}
        : SaveFileOptions) : boolean {

            try {

            fs.mkdirSync(fileDestination, { recursive: true });        
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            console.log('File created');    
            return true;             
            } catch (error) {
                console.error('Error creating file: ', error);
                return false;
            }


        }
}