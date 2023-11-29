import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Fmea = new Schema({
    step: String,
    failureMode: String,
    failureEffects: String,
    severity: Number,
    causes: String,
    occurence: Number,
    controls: String,
    detection: Number,
    recommendedAction: String,
    responsibility: String,
    actionsTaken: String,
    updatedSeverity: Number,
    updatedOccurence: Number,
    updatedDetectance: Number
}, {timestamps: true});

export default mongoose.model("Fmea", Fmea);