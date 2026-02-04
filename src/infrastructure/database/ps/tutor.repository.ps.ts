import { TutorRepository } from "../../../domain/repositories/tutor.repository";
import { Tutor } from "../../../domain/entities/tutor.entity";
import { prisma } from "../../database/ps/prisma";
import { Prisma } from "../../../../generated/prisma/client";
import { ConflictError, DatabaseError } from "../../../shared/errors/app.errors";

export class TutorRepositoryPs implements TutorRepository {
    async create(tutor: any): Promise<Tutor> {
        const { personId, studentIds, ...data } = tutor;
        try {
            const res = await prisma.tutor.create({
                data: {
                    ...data,
                    person: { connect: { id: personId } },
                    ...(studentIds && { students: { connect: studentIds.map((id: string) => ({ id })) } })
                },
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
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Esta persona ya tiene asignado un tutor`);
                }
                if (error.code === 'P2003') {
                    throw new DatabaseError(`La persona con ID ${personId} no existe`);
                }
            }
            throw error;
        }
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

    async findByPersonId(personId: string): Promise<Tutor | null> {
        const res = await prisma.tutor.findUnique({
            where: { personId },
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
        const { personId, studentIds, ...data } = tutor;
        try {
            const res = await prisma.tutor.update({
                where: { id },
                data: {
                    ...data,
                    ...(personId && { person: { connect: { id: personId } } }),
                    ...(studentIds && { students: { set: studentIds.map((id: string) => ({ id })) } })
                },
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
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Esta persona ya tiene asignado un tutor`);
                }
                if (error.code === 'P2025') {
                    return null;
                }
            }
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        await prisma.tutor.delete({
            where: { id }
        });
    }
}
