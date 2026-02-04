import { TutorRepository } from "../../../domain/repositories/tutor.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class UpdateTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(id: string, data: any) {
        if (data.personId) {
            const existing = await this.tutorRepository.findByPersonId(data.personId);
            if (existing && existing.id !== id) {
                throw new ConflictError(`Esta persona ya tiene asignado un tutor`);
            }
        }
        return this.tutorRepository.update(id, data);
    }
}
