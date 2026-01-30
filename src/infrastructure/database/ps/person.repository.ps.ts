import { prisma } from "../../database/ps/prisma";
import { PersonRepository } from "../../../domain/repositories/person.repository";
import { Person } from "../../../types/person";

export class PersonRepositoryPg implements PersonRepository {
    
    async create(person: Person): Promise<Person> {
        const res = await prisma.person.create({ data: person });
        return res as Person;
    }
    async findAll(): Promise<Person[]> {
        const res = await prisma.person.findMany();
        return res as Person[];
    }
    async findById(id: string): Promise<Person | null> {
        const res = await prisma.person.findUnique({ where: { id } });
        return res as Person | null;
    }
    async update(id: string, person: Person): Promise<Person | null> {
        const res = await prisma.person.update({ where: { id }, data: person });
        return res as Person;
    }
    async delete(id: string): Promise<void> {
        await prisma.person.delete({ where: { id } });
    }
    
}
