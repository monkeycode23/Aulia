import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";

export class GetClassRoomByIdUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(id: string) {
        return this.classRoomRepository.findById(id);
    }
}
