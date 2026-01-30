import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";

export class DeleteClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(id: string) {
        return this.classRoomRepository.delete(id);
    }
}
