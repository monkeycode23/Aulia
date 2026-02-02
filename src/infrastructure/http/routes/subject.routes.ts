import { Router, Request, Response, NextFunction } from "express";
import { SubjectController } from "../controllers/subject.controller";
import { createSubjectValidation, updateSubjectValidation } from "../validations/subject.validations";
import { validateRequest } from "../middlewares/validator.middleware";
import { authRequired } from "../middlewares/auth.middleware";

const router = Router();
const controller = new SubjectController();

router.post("/", authRequired, createSubjectValidation, validateRequest, (req: Request, res: Response, next: NextFunction) => controller.create(req, res, next));
router.get("/", authRequired, (req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next));
router.get("/:id", authRequired, (req: Request, res: Response, next: NextFunction) => controller.findById(req, res, next));
router.put("/:id", authRequired, updateSubjectValidation, validateRequest, (req: Request, res: Response, next: NextFunction) => controller.update(req, res, next));
router.delete("/:id", authRequired, (req: Request, res: Response, next: NextFunction) => controller.delete(req, res, next));

export default router;
