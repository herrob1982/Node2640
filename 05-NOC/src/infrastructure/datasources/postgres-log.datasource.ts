import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { prisma } from "../../data/postgres/prisma.client";
import { SeverityLevel } from "../../../generated/prisma";



const severityEnum ={
    low: SeverityLevel.LOW,
    high: SeverityLevel.HIGH,
    medium: SeverityLevel.MEDIUM
}

export class PostgresLogDataSource implements LogDataSource {
    
     async saveLog(log: LogEntity): Promise<void> {
        
       const newLog = await prisma.logModel.create({
               data: {
                    message: log.message,
                    level: severityEnum[log.level],
                    origin: log.origin,
                    createdAt: log.createdAt
               }
          });

    }
    
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const level = severityEnum[severityLevel];
        const logs = await prisma.logModel.findMany({
            where: {
                level: level
            }
        });
      
         return logs.map(log => LogEntity.fromObject(log));


    }


}
