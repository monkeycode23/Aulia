import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class UpdateClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(id: string, data: any) {
        if (data.name) {
            const existing = await this.classRoomRepository.findByName(data.name);
            if (existing && existing.id !== id) {
                throw new ConflictError(`Ya existe un aula con el nombre: ${data.name}`);
            }
        }
        return this.classRoomRepository.update(id, data);
    }
}
