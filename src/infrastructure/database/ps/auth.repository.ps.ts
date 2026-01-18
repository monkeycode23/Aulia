// infrastructure/database/authRepositoryPg.ts
import { AuthRepository } from "../../../domain/repositories/auth.repository";
import { User } from "../../../domain/entities/user.entity";
import { User as TUser } from "../../../types/user";
import {prisma} from "../../database/ps/prisma"


export class AuthRepositoryPg implements AuthRepository {
  async findByEmail(email: string): Promise<User | null> {
    const res = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if (!res) return null;

    
    return new User({...res} );
  }
}