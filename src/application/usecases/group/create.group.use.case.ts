import { GroupRepository } from "../../../domain/repositories/group.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class CreateGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(data: any) {
        const existing = await this.groupRepository.findByName(data.name);
        if (existing) {
            throw new ConflictError(`Ya existe un grupo con el nombre: ${data.name}`);
        }
        return this.groupRepository.create(data);
    }
}
