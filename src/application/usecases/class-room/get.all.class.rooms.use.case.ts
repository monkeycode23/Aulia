import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";

export class GetAllClassRoomsUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute() {
        return this.classRoomRepository.findAll();
    }
}
