import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class UpdateClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(id: string, data: any) {
        if (!id) throw new ValidationError("ID is required");
        return this.classRoomRepository.update(id, data);
    }
}
