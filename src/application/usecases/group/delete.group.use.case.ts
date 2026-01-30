import { GroupRepository } from "../../../domain/repositories/group.repository";

export class DeleteGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(id: string) {
        return this.groupRepository.delete(id);
    }
}
