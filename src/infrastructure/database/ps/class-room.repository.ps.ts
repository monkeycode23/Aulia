import { ClassRoomRepository } from "../../../domain/repositories/class-room.repository";
import { ClassRoom } from "../../../domain/entities/class-room.entity";
import { prisma } from "../../database/ps/prisma";
import { Prisma } from "../../../../generated/prisma/client";
import { ConflictError, DatabaseError } from "../../../shared/errors/app.errors";

export class ClassRoomRepositoryPs implements ClassRoomRepository {
    async create(classRoom: any): Promise<ClassRoom> {
        const { schoolId, ...data } = classRoom;
        try {
            const res = await prisma.classRoom.create({
                data: {
                    ...data,
                    school: { connect: { id: schoolId } }
                },
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
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Ya existe un aula con el nombre: ${data.name}`);
                }
                if (error.code === 'P2003') {
                    throw new DatabaseError(`La escuela con ID ${schoolId} no existe`);
                }
            }
            throw error;
        }
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
        const { schoolId, ...data } = classRoom;
        try {
            const res = await prisma.classRoom.update({
                where: { id },
                data: {
                    ...data,
                    ...(schoolId && { school: { connect: { id: schoolId } } })
                },
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
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError(`Ya existe un aula con el nombre: ${data.name}`);
                }
                if (error.code === 'P2025') {
                    return null;
                }
            }
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        await prisma.classRoom.delete({
            where: { id }
        });
    }
}
