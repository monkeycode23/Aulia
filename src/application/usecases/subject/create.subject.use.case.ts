import { SubjectRepository } from "../../../domain/repositories/subject.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class CreateSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(data: any) {
        if (!data.name) throw new ValidationError("Name is required");
        if (!data.schoolId) throw new ValidationError("School ID is required");
        
        return this.subjectRepository.create(data);
    }
}
