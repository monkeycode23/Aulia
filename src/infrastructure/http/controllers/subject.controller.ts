import { NextFunction, Request, Response } from "express";
import { SubjectRepositoryPs } from "../../database/ps/subject.repository.ps";
import { CreateSubjectUseCase } from "../../../application/usecases/subject/create.subject.use.case";
import { GetAllSubjectsUseCase } from "../../../application/usecases/subject/get.all.subjects.use.case";
import { GetSubjectByIdUseCase } from "../../../application/usecases/subject/get.subject.by.id.use.case";
import { UpdateSubjectUseCase } from "../../../application/usecases/subject/update.subject.use.case";
import { DeleteSubjectUseCase } from "../../../application/usecases/subject/delete.subject.use.case";
import { ApiResponse } from "../response/api.response";

export class SubjectController {
    private readonly repo = new SubjectRepositoryPs();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new CreateSubjectUseCase(this.repo);
            const result = await useCase.execute(req.body);
            ApiResponse.success(res, result, "Subject created successfully", 201);
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAllSubjectsUseCase(this.repo);
            const result = await useCase.execute();
            ApiResponse.success(res, result, "Subjects retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetSubjectByIdUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string);
            if (!result) return ApiResponse.error(res, null, "Subject not found", 404);
            ApiResponse.success(res, result, "Subject retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new UpdateSubjectUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string, req.body);
            if (!result) return ApiResponse.error(res, null, "Subject not found", 404);
            ApiResponse.success(res, result, "Subject updated successfully");
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new DeleteSubjectUseCase(this.repo);
            await useCase.execute(req.params.id as string);
            ApiResponse.success(res, null, "Subject deleted successfully");
        } catch (err) {
            next(err);
        }
    }
}
