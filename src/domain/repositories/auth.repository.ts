import { User } from "../entities/user.entity";

export interface AuthRepository {
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findToken(userId:string, tokenStr: string):Promise<any | null>
}