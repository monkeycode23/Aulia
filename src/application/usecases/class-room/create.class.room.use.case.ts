import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class CreateClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(data: any) {
        if (!data.name) throw new ValidationError("Name is required");
        if (!data.capacity) throw new ValidationError("Capacity is required");
        if (!data.schoolId) throw new ValidationError("School ID is required");
        
        return this.classRoomRepository.create(data);
    }
}
