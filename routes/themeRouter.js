import { Router } from "express";
import { getThemes, postThemes } from "../controllers/themeController.js";

const themeRouter = Router();

themeRouter.get("/themes", getThemes);
themeRouter.post("/themes", postThemes);

export default themeRouter;
