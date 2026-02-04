import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class CreateClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(data: any) {
        const existing = await this.classRoomRepository.findByName(data.name);
        if (existing) {
            throw new ConflictError(`Ya existe un aula con el nombre: ${data.name}`);
        }
        return this.classRoomRepository.create(data);
    }
}
