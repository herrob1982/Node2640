
export interface CreateTableUseCase {

    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase {

    constructor() {
        /**
         * Di dependecy injection   
         */
    }

    execute( {base, limit = 10}: CreateTableOptions) : string {
        let outmessage = '';

        for (let i = 1; i <= limit; i++) {
            outmessage += `${base} x ${i} = ${base * i}`;
            if (i < limit) outmessage += '\n';
            
        }

        return outmessage;


    }


}
