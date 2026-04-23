
import mongoose from "mongoose";

interface ConnectionOptions {
    mongoUrl: string;
    dbName: string;

}

export class MongoDataBase{

    static async connect(options: ConnectionOptions) {
        const { mongoUrl, dbName } = options;
        try {

            await mongoose.connect(mongoUrl, {
                dbName: dbName
            });

            console.log("Conexión a MongoDB establecida exitosamente.");
        }
        catch (error) {
            console.error("Error al conectar a MongoDB:", error);
            throw error;
        }

    }

}
