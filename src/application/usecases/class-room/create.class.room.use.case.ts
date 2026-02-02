import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";

export class CreateClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(data: any) {
        return this.classRoomRepository.create(data);
    }
}
