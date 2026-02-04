import { SubjectRepository } from "../../../domain/repositories/subject.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class UpdateSubjectUseCase {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async execute(id: string, data: any) {
        if (data.code) {
            const existing = await this.subjectRepository.findByCode(data.code);
            if (existing && existing.id !== id) {
                throw new ConflictError(`Ya existe una materia con el código: ${data.code}`);
            }
        }
        return this.subjectRepository.update(id, data);
    }
}
