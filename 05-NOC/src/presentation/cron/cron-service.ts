

import { CronJob } from "cron";


type CronTime = string | Date ;
type OnTick = () => void;



export class CronService {
    
    static startJob( cronTime: CronTime, onTick: OnTick) : CronJob {

    //    var job = new CronJob(
    //         '*/2 * * * * *', 
    //         () => {
    //             console.log('Tarea programada ejecutada cada 5 segundos');
    //         },
    //         null,
    //         true,
    //         'America/Los_Angeles'
    //     );

        const job = new CronJob(cronTime, onTick);

        job.start();

        return job;


    }

}