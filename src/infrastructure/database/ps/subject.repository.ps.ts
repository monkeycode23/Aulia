import { SubjectRepository } from "../../../domain/repositories/subject.repository";
import { Subject } from "../../../domain/entities/subject.entity";
import { prisma } from "../../database/ps/prisma";

export class SubjectRepositoryPs implements SubjectRepository {
    async create(subject: any): Promise<Subject> {
        const res = await prisma.subject.create({
            data: subject,
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
        const res = await prisma.subject.update({
            where: { id },
            data: subject,
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

    async delete(id: string): Promise<void> {
        await prisma.subject.delete({
            where: { id }
        });
    }
}
