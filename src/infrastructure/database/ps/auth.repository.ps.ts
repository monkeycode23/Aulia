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

  async findByUsername(username: string): Promise<User | null> {
    const res = await prisma.user.findUnique({
        where:{
            username
        }
    })
    if (!res) return null;

    
    return new User({...res} );
  }


  async findToken(userId: number, tokenStr: string): Promise<any | null> {
    const res = await prisma.user.findUnique({
        where:{
            id:userId
        },
        include:{
            tokens:true
        }
    })
    if (!res) return null;

    const token = res.tokens.some((t)=> t.token==tokenStr)

    return token ?? null  
  }
}