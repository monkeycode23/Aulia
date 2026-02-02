import { SubjectRepository } from "../../../domain/repositories/subject.repository";
import { Subject } from "../../../domain/entities/subject.entity";
import { prisma } from "../../database/ps/prisma";
import { Prisma } from "../../../../generated/prisma/client";
import { ConflictError, DatabaseError } from "../../../shared/errors/app.errors";

export class SubjectRepositoryPs implements SubjectRepository {
    async create(subject: any): Promise<Subject> {
        const { schoolId, teacherIds, groupIds, ...data } = subject;
        try {
            const res = await prisma.subject.create({
                data: {
                    ...data,
                    ...(schoolId && { school: { connect: { id: schoolId } } }),
                    ...(teacherIds && { teachers: { connect: teacherIds.map((id: string) => ({ id })) } }),
                    ...(groupIds && { groups: { connect: groupIds.map((id: string) => ({ id })) } })
                },
                include: {
                    school: true,
                    teachers: true,
                    groups: true,
                    groupSubjects: true
                }
            });

            return new Subject(
                res.id,
                res.name,
                res.code ?? "",
                res.status,
                res.createdAt,
                res.updatedAt,
                res.school as any,
                res.teachers as any,
                res.groups as any,
                res.groupSubjects as any
            );
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Ya existe una materia con el código: ${data.code}`);
                }
                if (error.code === 'P2003') {
                    throw new DatabaseError(`Alguna de las entidades relacionadas no existe`);
                }
            }
            throw error;
        }
    }

    async findAll(): Promise<Subject[]> {
        const results = await prisma.subject.findMany({
            include: {
                school: true,
                teachers: true,
                groups: true,
                groupSubjects: true
            }
        });

        return results.map(res => new Subject(
            res.id,
            res.name,
            res.code ?? "",
            res.status,
            res.createdAt,
            res.updatedAt,
            res.school as any,
            res.teachers as any,
            res.groups as any,
            res.groupSubjects as any
        ));
    }

    async findById(id: string): Promise<Subject | null> {
        const res = await prisma.subject.findUnique({
            where: { id },
            include: {
                school: true,
                teachers: true,
                groups: true,
                groupSubjects: true
            }
        });

        if (!res) return null;

        return new Subject(
            res.id,
            res.name,
            res.code ?? "",
            res.status,
            res.createdAt,
            res.updatedAt,
            res.school as any,
            res.teachers as any,
            res.groups as any,
            res.groupSubjects as any
        );
    }

    async update(id: string, subject: any): Promise<Subject | null> {
        const { schoolId, teacherIds, groupIds, ...data } = subject;
        try {
            const res = await prisma.subject.update({
                where: { id },
                data: {
                    ...data,
                    ...(schoolId && { school: { connect: { id: schoolId } } }),
                    ...(teacherIds && { teachers: { set: teacherIds.map((id: string) => ({ id })) } }),
                    ...(groupIds && { groups: { set: groupIds.map((id: string) => ({ id })) } })
                },
                include: {
                    school: true,
                    teachers: true,
                    groups: true,
                    groupSubjects: true
                }
            });

            if (!res) return null;

            return new Subject(
                res.id,
                res.name,
                res.code ?? "",
                res.status,
                res.createdAt,
                res.updatedAt,
                res.school as any,
                res.teachers as any,
                res.groups as any,
                res.groupSubjects as any
            );
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Ya existe una materia con el código: ${data.code}`);
                }
                if (error.code === 'P2025') {
                    return null;
                }
            }
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        await prisma.subject.delete({
            where: { id }
        });
    }
}
