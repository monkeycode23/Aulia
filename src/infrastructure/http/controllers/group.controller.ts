import { NextFunction, Request, Response } from "express";
import { GroupRepositoryPs } from "../../database/ps/group.repository.ps";
import { CreateGroupUseCase } from "../../../application/usecases/group/create.group.use.case";
import { GetAllGroupsUseCase } from "../../../application/usecases/group/get.all.groups.use.case";
import { GetGroupByIdUseCase } from "../../../application/usecases/group/get.group.by.id.use.case";
import { UpdateGroupUseCase } from "../../../application/usecases/group/update.group.use.case";
import { DeleteGroupUseCase } from "../../../application/usecases/group/delete.group.use.case";
import { ApiResponse } from "../response/api.response";

export class GroupController {
    private readonly repo = new GroupRepositoryPs();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new CreateGroupUseCase(this.repo);
            const result = await useCase.execute(req.body);
            ApiResponse.success(res, result, "Group created successfully", 201);
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAllGroupsUseCase(this.repo);
            const result = await useCase.execute();
            ApiResponse.success(res, result, "Groups retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetGroupByIdUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string);
            if (!result) return ApiResponse.error(res, null, "Group not found", 404);
            ApiResponse.success(res, result, "Group retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new UpdateGroupUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string, req.body);
            if (!result) return ApiResponse.error(res, null, "Group not found", 404);
            ApiResponse.success(res, result, "Group updated successfully");
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new DeleteGroupUseCase(this.repo);
            await useCase.execute(req.params.id as string);
            ApiResponse.success(res, null, "Group deleted successfully");
        } catch (err) {
            next(err);
        }
    }
}
