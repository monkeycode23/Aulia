import { TutorRepository } from "../../../domain/repositories/tutor.repository";

export class GetAllTutorsUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute() {
        return this.tutorRepository.findAll();
    }
}
