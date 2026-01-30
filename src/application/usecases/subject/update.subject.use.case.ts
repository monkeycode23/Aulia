import { SubjectRepository } from "../../../domain/repositories/subject.repository";

export class UpdateSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(id: string, data: any) {
        return this.subjectRepository.update(id, data);
    }
}
