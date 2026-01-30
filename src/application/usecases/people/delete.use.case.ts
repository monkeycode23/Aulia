import {PersonRepository} from "../../../domain/repositories/person.repository";

export class DeletePersonUseCase {
    constructor(private personRepository: PersonRepository) {}

    async execute(id: string): Promise<void> {
        await this.personRepository.delete(id);
    }
}
