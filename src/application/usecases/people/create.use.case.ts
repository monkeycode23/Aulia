import {PersonRepository} from "../../../domain/repositories/person.repository";
import {Person} from "../../../domain/entities/person.entity";

export class CreatePersonUseCase {
    constructor(private personRepository: PersonRepository) {}

    async execute(person: Person): Promise<Person> {
        return this.personRepository.create(person);
    }
}
