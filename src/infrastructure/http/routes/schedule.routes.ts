import { Router, Request, Response, NextFunction } from "express";
import { ScheduleController } from "../controllers/schedule.controller";
import { createScheduleValidation, updateScheduleValidation } from "../validations/schedule.validations";
import { validateRequest } from "../middlewares/validator.middleware";
import { authRequired } from "../middlewares/auth.middleware";

const router = Router();
const controller = new ScheduleController();

router.post("/", authRequired, createScheduleValidation, validateRequest, (req: Request, res: Response, next: NextFunction) => controller.create(req, res, next));
router.get("/", authRequired, (req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next));
router.get("/:id", authRequired, (req: Request, res: Response, next: NextFunction) => controller.findById(req, res, next));
router.put("/:id", authRequired, updateScheduleValidation, validateRequest, (req: Request, res: Response, next: NextFunction) => controller.update(req, res, next));
router.delete("/:id", authRequired, (req: Request, res: Response, next: NextFunction) => controller.delete(req, res, next));

export default router;
