import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";
import { AcademicPeriod } from "../../../domain/entities/academic.period.entity";
import { prisma } from "../../database/ps/prisma";

export class AcademicPeriodRepositoryPs implements AcademicPeriodRepository {
    async create(academicPeriod: any): Promise<AcademicPeriod> {
        const { schoolId, ...data } = academicPeriod;
        const res = await prisma.academicPeriod.create({
            data: {
                ...data,
                school: { connect: { id: schoolId } }
            },
            include: {
                school: true,
                schedules: true
            }
        });

        return new AcademicPeriod(
            res.id,
            res.name,
            res.status,
            res.startDate,
            res.endDate,
            res.createdAt,
            res.updatedAt ?? new Date(),
            [res.school] as any,
            res.schedules as any
        );
    }

    async findAll(): Promise<AcademicPeriod[]> {
        const results = await prisma.academicPeriod.findMany({
            include: {
                school: true,
                schedules: true
            }
        });

        return results.map(res => new AcademicPeriod(
            res.id,
            res.name,
            res.status,
            res.startDate,
            res.endDate,
            res.createdAt,
            res.updatedAt ?? new Date(),
            [res.school] as any,
            res.schedules as any
        ));
    }

    async findById(id: string): Promise<AcademicPeriod | null> {
        const res = await prisma.academicPeriod.findUnique({
            where: { id },
            include: {
                school: true,
                schedules: true
            }
        });

        if (!res) return null;

        return new AcademicPeriod(
            res.id,
            res.name,
            res.status,
            res.startDate,
            res.endDate,
            res.createdAt,
            res.updatedAt ?? new Date(),
            [res.school] as any,
            res.schedules as any
        );
    }

    async update(id: string, academicPeriod: any): Promise<AcademicPeriod | null> {
        const { schoolId, ...data } = academicPeriod;
        const res = await prisma.academicPeriod.update({
            where: { id },
            data: {
                ...data,
                ...(schoolId && { school: { connect: { id: schoolId } } })
            },
            include: {
                school: true,
                schedules: true
            }
        });

        if (!res) return null;

        return new AcademicPeriod(
            res.id,
            res.name,
            res.status,
            res.startDate,
            res.endDate,
            res.createdAt,
            res.updatedAt ?? new Date(),
            [res.school] as any,
            res.schedules as any
        );
    }

    async delete(id: string): Promise<void> {
        await prisma.academicPeriod.delete({
            where: { id }
        });
    }
}
