import { GroupRepository } from "../../../domain/repositories/group.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class CreateGroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {}

    async execute(data: any) {
        if (!data.name) throw new ValidationError("Name is required");
        if (!data.gradeLevel) throw new ValidationError("Grade level is required");
        if (!data.schoolId) throw new ValidationError("School ID is required");
        
        return this.groupRepository.create(data);
    }
}
