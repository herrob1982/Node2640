
import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    message: { type: String, required: true },
    level: { type: String, required: true, enum: ["low", "medium", "high"], default: "low" },
    origin: { type: String, default: "unknown" },
    createdAt: { type: Date, default: Date.now }
});


export const LogModel = mongoose.model("Log", logSchema);



