import { CreateTable } from "../domain/use-cases/create-table.use-case.ts";
import { SaveFile } from "../domain/use-cases/save-file.use-case.ts";

interface RunOptions {
    base: number;
    limit : number;
    showTable : boolean;
    fileName : string;
    fileDestination : string;
}

export class ServerApp{

    static run({base, limit, showTable, fileName, fileDestination}: RunOptions ){
        console.log('Servidor iniciado...');
        
        const table = new CreateTable().execute({base, limit});

        const fileCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileName,
                fileDestination,
            });

        if (showTable) console.log(table);
        console.log('Archivo creado: ', fileCreated);
    }

}

