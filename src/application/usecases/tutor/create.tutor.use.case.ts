import { TutorRepository } from "../../../domain/repositories/tutor.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class CreateTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(data: any) {
        const existing = await this.tutorRepository.findByPersonId(data.personId);
        if (existing) {
            throw new ConflictError(`Esta persona ya tiene asignado un tutor`);
        }
        return this.tutorRepository.create(data);
    }
}
