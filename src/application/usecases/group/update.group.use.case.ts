import { GroupRepository } from "../../../domain/repositories/group.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class UpdateGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(id: string, data: any) {
        if (data.name) {
            const existing = await this.groupRepository.findByName(data.name);
            if (existing && existing.id !== id) {
                throw new ConflictError(`Ya existe un grupo con el nombre: ${data.name}`);
            }
        }
        return this.groupRepository.update(id, data);
    }
}
