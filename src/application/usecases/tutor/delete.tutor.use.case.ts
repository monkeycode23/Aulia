import { TutorRepository } from "../../../domain/repositories/tutor.repository";

export class DeleteTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(id: string) {
        return this.tutorRepository.delete(id);
    }
}
