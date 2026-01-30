import { GroupRepository } from "../../../domain/repositories/group.repository";

export class GetAllGroupsUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute() {
        return this.groupRepository.findAll();
    }
}
