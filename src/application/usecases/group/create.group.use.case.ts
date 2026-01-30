import { GroupRepository } from "../../../domain/repositories/group.repository";

export class CreateGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(data: any) {
        return this.groupRepository.create(data);
    }
}
