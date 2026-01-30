import { SubjectRepository } from "../../../domain/repositories/subject.repository";

export class GetSubjectByIdUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(id: string) {
        return this.subjectRepository.findById(id);
    }
}
