import { NextFunction, Request, Response } from "express";
import { ScheduleRepositoryPs } from "../../database/ps/schedule.repository.ps";
import { CreateScheduleUseCase } from "../../../application/usecases/schedule/create.schedule.use.case";
import { GetAllSchedulesUseCase } from "../../../application/usecases/schedule/get.all.schedules.use.case";
import { GetScheduleByIdUseCase } from "../../../application/usecases/schedule/get.schedule.by.id.use.case";
import { UpdateScheduleUseCase } from "../../../application/usecases/schedule/update.schedule.use.case";
import { DeleteScheduleUseCase } from "../../../application/usecases/schedule/delete.schedule.use.case";
import { ApiResponse } from "../response/api.response";

export class ScheduleController {
    private readonly repo = new ScheduleRepositoryPs();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new CreateScheduleUseCase(this.repo);
            const result = await useCase.execute(req.body);
            ApiResponse.success(res, result, "Schedule created successfully", 201);
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAllSchedulesUseCase(this.repo);
            const result = await useCase.execute();
            ApiResponse.success(res, result, "Schedules retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetScheduleByIdUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string);
            if (!result) return ApiResponse.error(res, null, "Schedule not found", 404);
            ApiResponse.success(res, result, "Schedule retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new UpdateScheduleUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string, req.body);
            if (!result) return ApiResponse.error(res, null, "Schedule not found", 404);
            ApiResponse.success(res, result, "Schedule updated successfully");
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new DeleteScheduleUseCase(this.repo);
            await useCase.execute(req.params.id as string);
            ApiResponse.success(res, null, "Schedule deleted successfully");
        } catch (err) {
            next(err);
        }
    }
}
