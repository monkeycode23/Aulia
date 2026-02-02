import { TutorRepository } from "../../../domain/repositories/tutor.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class CreateTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(data: any) {
        if (!data.personId) throw new ValidationError("Person ID is required");
        
        return this.tutorRepository.create(data);
    }
}
