import { Router, Request, Response, NextFunction } from "express";
import { TutorController } from "../controllers/tutor.controller";
import { createTutorValidation, updateTutorValidation } from "../validations/tutor.validations";
import { validateRequest } from "../middlewares/validator.middleware";
import { authRequired } from "../middlewares/auth.middleware";

const router = Router();
const controller = new TutorController();

router.post("/", authRequired, createTutorValidation, validateRequest, (req: Request, res: Response, next: NextFunction) => controller.create(req, res, next));
router.get("/", authRequired, (req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next));
router.get("/:id", authRequired, (req: Request, res: Response, next: NextFunction) => controller.findById(req, res, next));
router.put("/:id", authRequired, updateTutorValidation, validateRequest, (req: Request, res: Response, next: NextFunction) => controller.update(req, res, next));
router.delete("/:id", authRequired, (req: Request, res: Response, next: NextFunction) => controller.delete(req, res, next));

export default router;
