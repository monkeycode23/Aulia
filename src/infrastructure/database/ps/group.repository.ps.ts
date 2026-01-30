import { GroupRepository } from "../../../domain/repositories/group.repository";
import { Group } from "../../../domain/entities/group.entity";
import { prisma } from "../../database/ps/prisma";

export class GroupRepositoryPs implements GroupRepository {
    async create(group: any): Promise<Group> {
        const res = await prisma.group.create({
            data: group,
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
        const res = await prisma.group.update({
            where: { id },
            data: group,
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

    async delete(id: string): Promise<void> {
        await prisma.group.delete({
            where: { id }
        });
    }
}
