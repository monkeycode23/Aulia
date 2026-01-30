// infrastructure/database/schoolRepositoryPg.ts
import { SchoolRepository } from "../../../domain/repositories/school.repository";
import { School } from "../../../domain/entities/school.entity";
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

    return new School(
      res.id,
      res.name,
      res.code ?? undefined,
      res.type,
      res.establishedAt ?? undefined,
      res.email ?? undefined,
      res.phone ?? undefined,
      res.address ?? undefined,
      res.city ?? undefined,
      res.state ?? undefined,
      res.country ?? undefined,
      res.postalCode ?? undefined,
      res.website ?? undefined,
      res.logoUrl ?? undefined,
      res.principalId ?? undefined
    );
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

    return new School(
      res.id,
      res.name,
      res.code ?? undefined,
      res.type,
      res.establishedAt ?? undefined,
      res.email ?? undefined,
      res.phone ?? undefined,
      res.address ?? undefined,
      res.city ?? undefined,
      res.state ?? undefined,
      res.country ?? undefined,
      res.postalCode ?? undefined,
      res.website ?? undefined,
      res.logoUrl ?? undefined,
      res.principalId ?? undefined
    );
  }

 
  async create(data: any): Promise<School> {
    const res = await prisma.school.create({
      data,
    });

    return res as School
  }

  // Actualizar escuela
  async update(id: string, data: Partial<School>): Promise<School | null> {
    const res = await prisma.school.update({
      where: { id },
      data,
    });

    if (!res) return null;

    return new School(
      res.id,
      res.name,
      res.code ?? undefined,
      res.type,
      res.establishedAt ?? undefined,
      res.email ?? undefined,
      res.phone ?? undefined,
      res.address ?? undefined,
      res.city ?? undefined,
      res.state ?? undefined,
      res.country ?? undefined,
      res.postalCode ?? undefined,
      res.website ?? undefined,
      res.logoUrl ?? undefined,
      res.principalId ?? undefined
    );
  }

  // Eliminar escuela
  async delete(id: string): Promise<boolean> {
    await prisma.school.delete({ where: { id } });
    return true;
  }
}
