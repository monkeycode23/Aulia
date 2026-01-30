import { TutorRepository } from "../../../domain/repositories/tutor.repository";

export class GetTutorByIdUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(id: string) {
        return this.tutorRepository.findById(id);
    }
}
