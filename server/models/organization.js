import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Organization = new Schema({
    name: String,
    forms: {
        fmeas: [{type: Schema.Types.ObjectId, ref: "Fmea"}]
    }
}, {timestamps: true});

export default mongoose.model("Organization", Organization);