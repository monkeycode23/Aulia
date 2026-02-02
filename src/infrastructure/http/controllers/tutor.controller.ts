import { NextFunction, Request, Response } from "express";
import { TutorRepositoryPs } from "../../database/ps/tutor.repository.ps";
import { CreateTutorUseCase } from "../../../application/usecases/tutor/create.tutor.use.case";
import { GetAllTutorsUseCase } from "../../../application/usecases/tutor/get.all.tutors.use.case";
import { GetTutorByIdUseCase } from "../../../application/usecases/tutor/get.tutor.by.id.use.case";
import { UpdateTutorUseCase } from "../../../application/usecases/tutor/update.tutor.use.case";
import { DeleteTutorUseCase } from "../../../application/usecases/tutor/delete.tutor.use.case";
import { ApiResponse } from "../response/api.response";

export class TutorController {
    private readonly repo = new TutorRepositoryPs();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new CreateTutorUseCase(this.repo);
            const result = await useCase.execute(req.body);
            ApiResponse.success(res, result, "Tutor created successfully", 201);
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAllTutorsUseCase(this.repo);
            const result = await useCase.execute();
            ApiResponse.success(res, result, "Tutors retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetTutorByIdUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string);
            if (!result) return ApiResponse.error(res, null, "Tutor not found", 404);
            ApiResponse.success(res, result, "Tutor retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new UpdateTutorUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string, req.body);
            if (!result) return ApiResponse.error(res, null, "Tutor not found", 404);
            ApiResponse.success(res, result, "Tutor updated successfully");
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new DeleteTutorUseCase(this.repo);
            await useCase.execute(req.params.id as string);
            ApiResponse.success(res, null, "Tutor deleted successfully");
        } catch (err) {
            next(err);
        }
    }
}
