import { Person } from "../entities/person.entity";

export interface PersonRepository {
    create(person: Person): Promise<Person>;
    findAll(): Promise<Person[]>;
    findById(id: string): Promise<Person | null>;
    update(id: string, person: Person): Promise<Person | null>;
    delete(id: string): Promise<void>;
}