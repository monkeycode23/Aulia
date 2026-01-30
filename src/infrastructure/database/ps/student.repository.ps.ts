import { prisma} from "./prisma";
import { StudentRepository } from "../../../domain/repositories/student.repository";
import { Student, StudentCreate, StudentUpdate } from "../../../types/student";

export class StudentRepositoryImpl implements StudentRepository {
    async create(data: StudentCreate): Promise<Student> {
        const res = await prisma.student.create({
            data,
            include: {
                person: true,
                school: true,
                group: true,
                tutor: true,
            },
        });
        return res as any as Student;
    }
    async update(id: string, student: StudentUpdate): Promise<Student> {
        const res = await prisma.student.update({
            where: { id },
            data: student,
            include: {
                person: true,
                school: true,
                group: true,
                tutor: true,
            },
        });
        return res as any as Student;
    }
    async delete(id: string): Promise<void> {
        await prisma.student.delete({
            where: { id },
        });
    }
    async findById(id: string): Promise<Student | null> {
        const res = await prisma.student.findUnique({
            where: { id },
            include: {
                person: true,
                school: true,
                group: true,
                tutor: true,
            },
        });
        return res as any as Student | null;
    }
    async findAll(): Promise<Student[]> {
        const res = await prisma.student.findMany({
            include: {
                person: true,
                school: true,
                group: true,
                tutor: true,
            },
        });
        return res as any as Student[];
    }
}