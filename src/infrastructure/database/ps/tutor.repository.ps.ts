import { TutorRepository } from "../../../domain/repositories/tutor.repository";
import { Tutor } from "../../../domain/entities/tutor.entity";
import { prisma } from "../../database/ps/prisma";

export class TutorRepositoryPs implements TutorRepository {
    async create(tutor: any): Promise<Tutor> {
        const res = await prisma.tutor.create({
            data: tutor,
            include: {
                person: true,
                students: true
            }
        });

        return new Tutor(
            res.id,
            res.person as any,
            res.students as any
        );
    }

    async findAll(): Promise<Tutor[]> {
        const results = await prisma.tutor.findMany({
            include: {
                person: true,
                students: true
            }
        });

        return results.map(res => new Tutor(
            res.id,
            res.person as any,
            res.students as any
        ));
    }

    async findById(id: string): Promise<Tutor | null> {
        const res = await prisma.tutor.findUnique({
            where: { id },
            include: {
                person: true,
                students: true
            }
        });

        if (!res) return null;

        return new Tutor(
            res.id,
            res.person as any,
            res.students as any
        );
    }

    async update(id: string, tutor: any): Promise<Tutor | null> {
        const res = await prisma.tutor.update({
            where: { id },
            data: tutor,
            include: {
                person: true,
                students: true
            }
        });

        if (!res) return null;

        return new Tutor(
            res.id,
            res.person as any,
            res.students as any
        );
    }

    async delete(id: string): Promise<void> {
        await prisma.tutor.delete({
            where: { id }
        });
    }
}
