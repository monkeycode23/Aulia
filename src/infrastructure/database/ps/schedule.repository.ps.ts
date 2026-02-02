import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";
import { Schedule } from "../../../domain/entities/schedule.entity";
import { prisma } from "../../database/ps/prisma";

export class ScheduleRepositoryPs implements ScheduleRepository {
    async create(schedule: any): Promise<Schedule> {
        const { academicPeriodId, teacherId, groupId, subjectId, ...data } = schedule;
        const res = await prisma.schedule.create({
            data: {
                ...data,
                academicPeriod: { connect: { id: academicPeriodId } },
                teacher: { connect: { id: teacherId } },
                groupSubject: { connect: { groupId_subjectId: { groupId, subjectId } } }
            },
            include: {
                academicPeriod: true,
                groupSubject: true,
                teacher: true
            }
        });

        return new Schedule(
            res.id,
            res.academicPeriod as any,
            res.groupId,
            res.subjectId,
            res.groupSubject as any,
            res.teacher as any,
            res.createdAt,
            res.updatedAt ?? new Date()
        );
    }

    async findAll(): Promise<Schedule[]> {
        const results = await prisma.schedule.findMany({
            include: {
                academicPeriod: true,
                groupSubject: true,
                teacher: true
            }
        });

        return results.map(res => new Schedule(
            res.id,
            res.academicPeriod as any,
            res.groupId,
            res.subjectId,
            res.groupSubject as any,
            res.teacher as any,
            res.createdAt,
            res.updatedAt ?? new Date()
        ));
    }

    async findById(id: string): Promise<Schedule | null> {
        const res = await prisma.schedule.findUnique({
            where: { id },
            include: {
                academicPeriod: true,
                groupSubject: true,
                teacher: true
            }
        });

        if (!res) return null;

        return new Schedule(
            res.id,
            res.academicPeriod as any,
            res.groupId,
            res.subjectId,
            res.groupSubject as any,
            res.teacher as any,
            res.createdAt,
            res.updatedAt ?? new Date()
        );
    }

    async update(id: string, schedule: any): Promise<Schedule | null> {
        const { academicPeriodId, teacherId, groupId, subjectId, ...data } = schedule;
        const res = await prisma.schedule.update({
            where: { id },
            data: {
                ...data,
                ...(academicPeriodId && { academicPeriod: { connect: { id: academicPeriodId } } }),
                ...(teacherId && { teacher: { connect: { id: teacherId } } }),
                ...(groupId && subjectId && { groupSubject: { connect: { groupId_subjectId: { groupId, subjectId } } } })
            },
            include: {
                academicPeriod: true,
                groupSubject: true,
                teacher: true
            }
        });

        if (!res) return null;

        return new Schedule(
            res.id,
            res.academicPeriod as any,
            res.groupId,
            res.subjectId,
            res.groupSubject as any,
            res.teacher as any,
            res.createdAt,
            res.updatedAt ?? new Date()
        );
    }

    async delete(id: string): Promise<void> {
        await prisma.schedule.delete({
            where: { id }
        });
    }
}
