import { SubjectRepository } from "../../../domain/repositories/subject.repository";

export class GetAllSubjectsUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute() {
        return this.subjectRepository.findAll();
    }
}
