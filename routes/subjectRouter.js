import { Router } from "express";
import { getMaterias } from "../controllers/subjectController.js";

const subjectRouter = Router();

subjectRouter.get("/materias", getMaterias);

export default subjectRouter;
