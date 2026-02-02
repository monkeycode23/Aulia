import { TutorRepository } from "../../../domain/repositories/tutor.repository";

export class UpdateTutorUseCase {
    constructor(private readonly tutorRepository: TutorRepository) {}

    async execute(id: string, data: any) {
        return this.tutorRepository.update(id, data);
    }
}
