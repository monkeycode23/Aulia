// infrastructure/database/schoolRepositoryPg.ts
import { SchoolRepository } from "../../../domain/repositories/school.repository";
import { School } from "../../../domain/entities/school.entity";
import { prisma } from "../../database/ps/prisma";
import { Permission } from "../../../types/actions";
import { EPermission } from "../../../../generated/prisma/enums";

export class permissionRepositoryPg /* implements SchoolRepository  */{
  
  
  async findById(id: string): Promise<Permission | null> {
    const res = await prisma.permission.findUnique({
      where: { id },
     
    });
    if (!res) return null;

    return res as Permission
  }

  
   async findByName(name: EPermission): Promise<Permission | null> {
    const res = await prisma.permission.findUnique({
      where: { name },
      
    });
    if (!res) return null;

    return res as Permission
  }

 
  async create(data: any): Promise<Permission> {
    const res = await prisma.permission.create({
      data,
    });

    return res as Permission
  }

  // Actualizar escuela
  async update(id: string, data: any): Promise<Permission | null> {
    const res = await prisma.permission.update({
      where: { id },
      data,
    });

    if (!res) return null;

    return res as Permission
  }

  // Eliminar escuela
  async delete(id: string): Promise<boolean> {
    await prisma.permission.delete({ where: { id } });
    return true;
  }
}
