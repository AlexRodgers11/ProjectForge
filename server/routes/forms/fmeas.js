import express from "express";
import Organization from "../../models/organization.js";
import Fmea from "../../models/fmea.js";
const fmeasRouter = express.Router();

fmeasRouter.post("/", async (req, res, next) => {
    try {
        const newFmea = new Fmea({...req.body});
        await newFmea.save();
        await Organization.findByIdAndUpdate(req.organizationId, {$push: {"forms.fmeas": newFmea}});
        res.status(200).send(newFmea);
    } catch (err) {
        res.status(500).send("There was an error with your request");
    }
});

export default fmeasRouter;