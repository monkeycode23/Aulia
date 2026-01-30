import { GroupRepository } from "../../../domain/repositories/group.repository";

export class GetGroupByIdUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(id: string) {
        return this.groupRepository.findById(id);
    }
}
