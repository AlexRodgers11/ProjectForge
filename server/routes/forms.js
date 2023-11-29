import express from "express";
const formsRouter = express.Router();
import fmeasRouter from "./forms/fmeas.js";

formsRouter.use("/fmea", fmeasRouter);

export default formsRouter;
