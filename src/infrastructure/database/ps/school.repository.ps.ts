// infrastructure/database/schoolRepositoryPg.ts
import { SchoolRepository } from "../../../domain/repositories/school.repository";
import { School, SchoolUpdate } from "../../../types/school";
import { prisma } from "../../database/ps/prisma";

export class SchoolRepositoryPg implements SchoolRepository {
  
  
  async findById(id: string): Promise<School | null> {
    const res = await prisma.school.findUnique({
      where: { id },
      include: {
        teachers: true,
        students: true,
        groups: true,
        subjects: true,
        principal: true,
      },
    });
    if (!res) return null;

    return res as School;
  }
  
  async findByCode(code: string): Promise<School | null> {
    const res = await prisma.school.findUnique({
      where: { code },
      include: {
        teachers: true,
        students: true,
        groups: true,
        subjects: true,
        principal: true,
      },
    });
    if (!res) return null;

    return res as School;
  }

 
  async create(data: any): Promise<School> {
    const res = await prisma.school.create({
      data,
    });

    return res as School
  }

  // Actualizar escuela
  async update(id: string, data: SchoolUpdate): Promise<School | null> {
    const res = await prisma.school.update({
      where: { id },
      data,
    });

    if (!res) return null;

    return res as School;
  }

  async delete(id: string): Promise<boolean> {
    await prisma.school.delete({ where: { id } });
    return true;
  }

  async findAll(): Promise<School[]> {
    const res = await prisma.school.findMany();
    return res as School[];
  }

}
