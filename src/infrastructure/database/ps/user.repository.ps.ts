// infrastructure/database/userRepositoryPg.ts
import { UserRepository } from "../../../domain/repositories/user.repository";
import { User } from "../../../domain/entities/user.entity";
import { prisma } from "../../database/ps/prisma";

export class UserRepositoryPg implements UserRepository {

  // Buscar usuario por ID
  async findById(id: number): Promise<User | null> {
    const res = await prisma.user.findUnique({
      where: { id },
      include: {
        roles: true,
        userSubscriptions: true,
        person: true,
      },
    });

    if (!res) return null;

    return new User({...res}
    );
  }

  
  async findByEmail(email: string): Promise<User | null> {
    const res = await prisma.user.findUnique({
      where: { email },
      include: {
        roles: true,
        userSubscriptions: true,
        person: true,
      },
    });

    if (!res) return null;

    return new User({...res});
  }

  
  async create(data: any): Promise<User> {
    const res = await prisma.user.create({
      data,
      include: {
        roles: true,
        userSubscriptions: true,
        person: true,
      },
    });

    return new User({...res});
  }

  // Actualizar usuario
  async update(id: number, data: Partial<User>): Promise<User | null> {
    // Omitir campos que Prisma no permite actualizar directamente (relaciones)
    const { roles, userSubscriptions, person, id: _, ...updateData } = data;

    const res = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        roles: true,
        userSubscriptions: true,
        person: true,
      },
    });

    if (!res) return null;

    return new User({...res});
  }

  // Eliminar usuario
  async delete(id: number): Promise<boolean> {
    await prisma.user.delete({ where: { id } });
    return true;
  }
}
