import { SubjectRepository } from "../../../domain/repositories/subject.repository";

export class DeleteSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(id: string) {
        return this.subjectRepository.delete(id);
    }
}
