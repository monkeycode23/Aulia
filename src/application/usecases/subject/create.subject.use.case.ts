import { SubjectRepository } from "../../../domain/repositories/subject.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class CreateSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(data: any) {
        if (data.code) {
            const existing = await this.subjectRepository.findByCode(data.code);
            if (existing) {
                throw new ConflictError(`Ya existe una materia con el código: ${data.code}`);
            }
        }
        return this.subjectRepository.create(data);
    }
}
