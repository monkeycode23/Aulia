import { TutorRepository } from "../../../domain/repositories/tutor.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class UpdateTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(id: string, data: any) {
        if (!id) throw new ValidationError("ID is required");
        return this.tutorRepository.update(id, data);
    }
}
