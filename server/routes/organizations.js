import express from "express";
const organizationsRouter = express.Router();
import Organization from "../models/organization.js";
import formsRouter from "./forms.js";

organizationsRouter.param("orgId", async (req, res, next, orgId) => {
    try {
        const organization = await Organization.findById(orgId);
        if(!organization) {
            res.status(404).send("Organization not found");
        } else {
            req.organizationId = orgId;
            next();
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

organizationsRouter.use("/:orgId/forms/", formsRouter);

export default organizationsRouter;