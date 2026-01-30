import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";

export class UpdateClassRoomUseCase {
    constructor(private readonly classRoomRepository: ClassRoomRepository) {}

    async execute(id: string, data: any) {
        return this.classRoomRepository.update(id, data);
    }
}
