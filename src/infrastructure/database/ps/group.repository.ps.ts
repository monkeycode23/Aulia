import { GroupRepository } from "../../../domain/repositories/group.repository";
import { Group } from "../../../domain/entities/group.entity";
import { prisma } from "../../database/ps/prisma";
import { Prisma } from "../../../../generated/prisma/client";
import { ConflictError, DatabaseError } from "../../../shared/errors/app.errors";

export class GroupRepositoryPs implements GroupRepository {
    async create(group: any): Promise<Group> {
        const { schoolId, teacherIds, studentIds, subjectIds, ...data } = group;
        try {
            const res = await prisma.group.create({
                data: {
                    ...data,
                    ...(schoolId && { school: { connect: { id: schoolId } } }),
                    ...(teacherIds && { teachers: { connect: teacherIds.map((id: string) => ({ id })) } }),
                    ...(studentIds && { students: { connect: studentIds.map((id: string) => ({ id })) } }),
                    ...(subjectIds && { subjects: { connect: subjectIds.map((id: string) => ({ id })) } })
                },
                include: {
                    school: true,
                    teachers: true,
                    students: true,
                    subjects: true,
                    groupSubjects: true
                }
            });

            return new Group(
                res.id,
                res.name,
                res.gradeLevel,
                res.status,
                res.teachers as any,
                res.subjects as any,
                res.school as any,
                res.createdAt,
                res.updatedAt,
                res.groupSubjects as any
            );
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Ya existe un grupo con el nombre: ${data.name}`);
                }
                if (error.code === 'P2003') {
                    throw new DatabaseError(`Alguna de las entidades relacionadas no existe`);
                }
            }
            throw error;
        }
    }

    async findAll(): Promise<Group[]> {
        const results = await prisma.group.findMany({
            include: {
                school: true,
                teachers: true,
                students: true,
                subjects: true,
                groupSubjects: true
            }
        });

        return results.map(res => new Group(
            res.id,
            res.name,
            res.gradeLevel,
            res.status,
            res.teachers as any,
            res.subjects as any,
            res.school as any,
            res.createdAt,
            res.updatedAt,
            res.groupSubjects as any
        ));
    }

    async findByName(name: string): Promise<Group | null> {
        const res = await prisma.group.findFirst({
            where: { name },
            include: {
                school: true,
                teachers: true,
                students: true,
                subjects: true,
                groupSubjects: true
            }
        });

        if (!res) return null;

        return new Group(
            res.id,
            res.name,
            res.gradeLevel,
            res.status,
            res.teachers as any,
            res.subjects as any,
            res.school as any,
            res.createdAt,
            res.updatedAt,
            res.groupSubjects as any
        );
    }

    async findById(id: string): Promise<Group | null> {
        const res = await prisma.group.findUnique({
            where: { id },
            include: {
                school: true,
                teachers: true,
                students: true,
                subjects: true,
                groupSubjects: true
            }
        });

        if (!res) return null;

        return new Group(
            res.id,
            res.name,
            res.gradeLevel,
            res.status,
            res.teachers as any,
            res.subjects as any,
            res.school as any,
            res.createdAt,
            res.updatedAt,
            res.groupSubjects as any
        );
    }

    async update(id: string, group: any): Promise<Group | null> {
        const { schoolId, teacherIds, studentIds, subjectIds, ...data } = group;
        try {
            const res = await prisma.group.update({
                where: { id },
                data: {
                    ...data,
                    ...(schoolId && { school: { connect: { id: schoolId } } }),
                    ...(teacherIds && { teachers: { set: teacherIds.map((id: string) => ({ id })) } }),
                    ...(studentIds && { students: { set: studentIds.map((id: string) => ({ id })) } }),
                    ...(subjectIds && { subjects: { set: subjectIds.map((id: string) => ({ id })) } })
                },
                include: {
                    school: true,
                    teachers: true,
                    students: true,
                    subjects: true,
                    groupSubjects: true
                }
            });

            if (!res) return null;

            return new Group(
                res.id,
                res.name,
                res.gradeLevel,
                res.status,
                res.teachers as any,
                res.subjects as any,
                res.school as any,
                res.createdAt,
                res.updatedAt,
                res.groupSubjects as any
            );
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Ya existe un grupo con el nombre: ${data.name}`);
                }
                if (error.code === 'P2025') {
                    return null;
                }
            }
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        await prisma.group.delete({
            where: { id }
        });
    }
}
