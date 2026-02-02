import { NextFunction, Request, Response } from "express";
import { AcademicPeriodRepositoryPs } from "../../database/ps/academic.period.repository.ps";
import { CreateAcademicPeriodUseCase } from "../../../application/usecases/academic-period/create.academic.period.use.case";
import { GetAllAcademicPeriodsUseCase } from "../../../application/usecases/academic-period/get.all.academic.periods.use.case";
import { GetAcademicPeriodByIdUseCase } from "../../../application/usecases/academic-period/get.academic.period.by.id.use.case";
import { UpdateAcademicPeriodUseCase } from "../../../application/usecases/academic-period/update.academic.period.use.case";
import { DeleteAcademicPeriodUseCase } from "../../../application/usecases/academic-period/delete.academic.period.use.case";
import { ApiResponse } from "../response/api.response";

export class AcademicPeriodController {
    private readonly repo = new AcademicPeriodRepositoryPs();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new CreateAcademicPeriodUseCase(this.repo);
            const result = await useCase.execute(req.body);
            ApiResponse.success(res, result, "Academic period created successfully", 201);
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAllAcademicPeriodsUseCase(this.repo);
            const result = await useCase.execute();
            ApiResponse.success(res, result, "Academic periods retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAcademicPeriodByIdUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string);
            if (!result) return ApiResponse.error(res, null, "Academic period not found", 404);
            ApiResponse.success(res, result, "Academic period retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new UpdateAcademicPeriodUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string, req.body);
            if (!result) return ApiResponse.error(res, null, "Academic period not found", 404);
            ApiResponse.success(res, result, "Academic period updated successfully");
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new DeleteAcademicPeriodUseCase(this.repo);
            await useCase.execute(req.params.id as string);
            ApiResponse.success(res, null, "Academic period deleted successfully");
        } catch (err) {
            next(err);
        }
    }
}
