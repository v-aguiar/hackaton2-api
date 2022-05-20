import { Router } from "express";
import { getThemes, postThemes } from "../controllers/themeController.js";

const themeRouter = Router();

themeRouter.get("/temas", getThemes);
themeRouter.post("/temas", postThemes);

export default themeRouter;
