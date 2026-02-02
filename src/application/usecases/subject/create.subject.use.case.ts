import { SubjectRepository } from "../../../domain/repositories/subject.repository";

export class CreateSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(data: any) {
        return this.subjectRepository.create(data);
    }
}
