import { Router } from "express";

import subjectRouter from "./subjectRouter.js";
import themeRouter from "./themeRouter.js";

const router = Router();

router.use(subjectRouter);
router.use(themeRouter);

export default router;
