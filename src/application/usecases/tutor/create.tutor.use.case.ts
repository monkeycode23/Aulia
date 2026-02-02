import { TutorRepository } from "../../../domain/repositories/tutor.repository";

export class CreateTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(data: any) {
        return this.tutorRepository.create(data);
    }
}
