
export enum LogSeverityLevel {
    low = "low",
    medium = "medium",
    high = "high"
}


export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    createdAt?: Date;
    origin: string;
}


export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor( options: LogEntityOptions) {
        
        const { message, level, origin , createdAt = new Date()} = options;

        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }


    static fromJson = (json: string): LogEntity => {
        
        const { message, level, createdAt, origin } = JSON.parse(json);
        if(!message || !level || !createdAt) {
            throw new Error("Invalid log format");
        }
        const log = new LogEntity({
            message,
            level,
            origin: origin || "unknown",
            createdAt: createdAt
        });
        //log.createdAt = new Date(createdAt);
        return log;
    }

    static fromObject = (obj: { [key: string]: any }): LogEntity => {

        const { message, level, createdAt, origin } = obj;

        const log = new LogEntity({
            message,
            level,
            origin: origin || "unknown",
            createdAt: createdAt
        });

        return log;


    }


}

