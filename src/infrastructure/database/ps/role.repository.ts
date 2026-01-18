// infrastructure/database/schoolRepositoryPg.ts
import { SchoolRepository } from "../../../domain/repositories/school.repository";
import { School } from "../../../domain/entities/school.entity";
import { prisma } from "../../database/ps/prisma";
import { Role } from "../../../types/actions";

export class RoleRepositoryPg /* implements SchoolRepository  */{
  
  
  async findById(id: number): Promise<Role | null> {
    const res = await prisma.role.findUnique({
      where: { id },
      include: {
        permissions: true,
        
      },
    });
    if (!res) return null;

    return res as Role
  }

  
   async findByName(name: string): Promise<Role | null> {
    const res = await prisma.role.findUnique({
      where: { name },
      include: {
        permissions: true,
        
      },
    });
    if (!res) return null;

    return res as Role
  }

 
  async create(data: any): Promise<Role> {
    const res = await prisma.role.create({
      data,
    });

    return res as Role
  }

  // Actualizar escuela
  async update(id: number, data: any): Promise<Role | null> {
    const res = await prisma.role.update({
      where: { id },
      data,
    });

    if (!res) return null;

    return res as Role
  }

  // Eliminar escuela
  async delete(id: number): Promise<boolean> {
    await prisma.role.delete({ where: { id } });
    return true;
  }
}
