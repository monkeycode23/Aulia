import { SubjectRepository } from "../../../domain/repositories/subject.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class UpdateSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(id: string, data: any) {
        if (!id) throw new ValidationError("ID is required");
        return this.subjectRepository.update(id, data);
    }
}
