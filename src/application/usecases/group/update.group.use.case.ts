import { GroupRepository } from "../../../domain/repositories/group.repository";

export class UpdateGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(id: string, data: any) {
        return this.groupRepository.update(id, data);
    }
}
