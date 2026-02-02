import { GroupRepository } from "../../../domain/repositories/group.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class UpdateGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(id: string, data: any) {
        if (!id) throw new ValidationError("ID is required");
        return this.groupRepository.update(id, data);
    }
}
