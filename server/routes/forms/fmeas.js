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
        res.status(500).send(err.message);
    }
});

fmeasRouter.get("/", async (req, res, next) => {
    try {
        console.log("fetching fmeas");
        const foundOrganization = await Organization.findById(req.organizationId, "forms.fmeas").populate("forms.fmeas");
        console.log({fmeasLength: foundOrganization.forms.fmeas.length});
        res.status(200).send(foundOrganization.forms.fmeas);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default fmeasRouter;