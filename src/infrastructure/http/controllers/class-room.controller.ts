import { NextFunction, Request, Response } from "express";
import { ClassRoomRepositoryPs } from "../../database/ps/class-room.repository.ps";
import { CreateClassRoomUseCase } from "../../../application/usecases/class-room/create.class.room.use.case";
import { GetAllClassRoomsUseCase } from "../../../application/usecases/class-room/get.all.class.rooms.use.case";
import { GetClassRoomByIdUseCase } from "../../../application/usecases/class-room/get.class.room.by.id.use.case";
import { UpdateClassRoomUseCase } from "../../../application/usecases/class-room/update.class.room.use.case";
import { DeleteClassRoomUseCase } from "../../../application/usecases/class-room/delete.class.room.use.case";
import { ApiResponse } from "../response/api.response";

export class ClassRoomController {
    private readonly repo = new ClassRoomRepositoryPs();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new CreateClassRoomUseCase(this.repo);
            const result = await useCase.execute(req.body);
            ApiResponse.success(res, result, "Classroom created successfully", 201);
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetAllClassRoomsUseCase(this.repo);
            const result = await useCase.execute();
            ApiResponse.success(res, result, "Classrooms retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new GetClassRoomByIdUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string);
            if (!result) return ApiResponse.error(res, null, "Classroom not found", 404);
            ApiResponse.success(res, result, "Classroom retrieved successfully");
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new UpdateClassRoomUseCase(this.repo);
            const result = await useCase.execute(req.params.id as string, req.body);
            if (!result) return ApiResponse.error(res, null, "Classroom not found", 404);
            ApiResponse.success(res, result, "Classroom updated successfully");
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const useCase = new DeleteClassRoomUseCase(this.repo);
            await useCase.execute(req.params.id as string);
            ApiResponse.success(res, null, "Classroom deleted successfully");
        } catch (err) {
            next(err);
        }
    }
}
