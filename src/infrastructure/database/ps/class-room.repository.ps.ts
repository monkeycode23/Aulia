import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";
import { ClassRoom } from "../../../domain/entities/class-room.entity";
import { prisma } from "../../database/ps/prisma";

export class ClassRoomRepositoryPs implements ClassRoomRepository {
    async create(classRoom: any): Promise<ClassRoom> {
        const res = await prisma.classRoom.create({
            data: classRoom,
            include: {
                school: true
            }
        });

        return new ClassRoom(
            res.id,
            res.name,
            res.status,
            res.capacity,
            res.resources,
            res.description,
            res.createdAt,
            res.updatedAt ?? new Date(),
            res.school as any
        );
    }

    async findAll(): Promise<ClassRoom[]> {
        const results = await prisma.classRoom.findMany({
            include: {
                school: true
            }
        });

        return results.map(res => new ClassRoom(
            res.id,
            res.name,
            res.status,
            res.capacity,
            res.resources,
            res.description,
            res.createdAt,
            res.updatedAt ?? new Date(),
            res.school as any
        ));
    }

    async findById(id: string): Promise<ClassRoom | null> {
        const res = await prisma.classRoom.findUnique({
            where: { id },
            include: {
                school: true
            }
        });

        if (!res) return null;

        return new ClassRoom(
            res.id,
            res.name,
            res.status,
            res.capacity,
            res.resources,
            res.description,
            res.createdAt,
            res.updatedAt ?? new Date(),
            res.school as any
        );
    }

    async update(id: string, classRoom: any): Promise<ClassRoom | null> {
        const res = await prisma.classRoom.update({
            where: { id },
            data: classRoom,
            include: {
                school: true
            }
        });

        if (!res) return null;

        return new ClassRoom(
            res.id,
            res.name,
            res.status,
            res.capacity,
            res.resources,
            res.description,
            res.createdAt,
            res.updatedAt ?? new Date(),
            res.school as any
        );
    }

    async delete(id: string): Promise<void> {
        await prisma.classRoom.delete({
            where: { id }
        });
    }
}
