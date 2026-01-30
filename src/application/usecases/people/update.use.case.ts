import {PersonRepository} from "../../../domain/repositories/person.repository";
import {Person} from "../../../domain/entities/person.entity";

export class UpdatePersonUseCase {
    constructor(private personRepository: PersonRepository) {}

    async execute(id: string, person: Person): Promise<Person | null> {
        return this.personRepository.update(id, person);
    }
}
