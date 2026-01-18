// infrastructure/database/teacherRepositoryPg.ts
import { TeacherRepository } from "../../../domain/repositories/teacher.repository";
import { Teacher } from "../../../domain/entities/teacher.entity";
import { prisma } from "../../database/ps/prisma";


type TeacherUpdateData = {
  employeeNumber?: string;
  specialization?: string;
  status?: string;
  hireDate?: Date;
  terminationDate?: Date;
  personId?: number; // solo si quieres cambiar la FK
  principalId?: number; // si aplica
};


type TeacherCreateData = {
  employeeNumber?: string;
  specialization?: string;
  status?: string;
  hireDate?: Date;
  terminationDate?: Date;
  personId?: number; // solo si quieres cambiar la FK
  principalId?: number; // si aplica
};

export class TeacherRepositoryPg implements TeacherRepository {

  // Buscar por ID
  async findById(id: number): Promise<Teacher | null> {
    const res = await prisma.teacher.findUnique({
      where: { id },
      include: {
        person: true,
        user: true,
        subjects: true,
        //groups: true,
      },
    });

    if (!res) return null;

    return new Teacher(
      res.id,
      res.personId,
      res.employeeNumber,
      res.status,
      res.hireDate,
      res.terminationDate ?? undefined,
      res.specialization ?? undefined,
      //res.user ?? undefined,
      //res.subjects ?? undefined,
      //res.groups ?? undefined,
      //res.createdAt,
      //res.updatedAt
    );
  }

  // Buscar por número de empleado
  async findByEmployeeNumber(employeeNumber: string): Promise<Teacher | null> {
    const res = await prisma.teacher.findUnique({
      where: { employeeNumber },
      include: {
        person: true,
        user: true,
        subjects: true,
        //groups: true,
      },
    });

    if (!res) return null;

    return new Teacher(
      res.id,
      res.personId,
      res.employeeNumber,
      res.status,
      res.hireDate,
      res.terminationDate ?? undefined,
      res.specialization ?? undefined,
     /*  res.user ?? undefined,
      res.subjects ?? undefined,
      res.groups ?? undefined,
      res.createdAt,
      res.updatedAt */
    );
  }

  // Crear docente
  async create(data: any): Promise<Teacher> {
    const res = await prisma.teacher.create({
      data,
      include: {
        person: true,
        user: true,
        subjects: true,
       // groups: true,
      },
    });

    return new Teacher(
      res.id,
      res.personId,
      res.employeeNumber,
      res.status,
      res.hireDate,
      res.terminationDate ?? undefined,
      res.specialization ?? undefined,
      /* res.user ?? undefined,
      res.subjects ?? undefined,
      res.groups ?? undefined,
      res.createdAt,
      res.updatedAt */
    );
  }

  // Actualizar docente
  async update(id: number, data: TeacherUpdateData): Promise<Teacher | null> {
     

    const res = await prisma.teacher.update({
      where: { id },
      data,
      include: {
        person: true,
        user: true,
        subjects: true,
       // groups: true,
      },
    });

    if (!res) return null;

    return new Teacher(
      res.id,
      res.personId,
      res.employeeNumber,
      res.status,
      res.hireDate,
      res.terminationDate ?? undefined,
      res.specialization ?? undefined,
      //res.user ?? undefined,
      /* res.subjects ?? undefined,
      res.groups ?? undefined,
      res.createdAt,
      res.updatedAt */
    );
  }

  // Eliminar docente
  async delete(id: number): Promise<boolean> {
    await prisma.teacher.delete({ where: { id } });
    return true;
  }
}
