import { User } from "../entities/user.entity";

export interface AuthRepository {
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findToken(userId:number, tokenStr: string):Promise<any | null>
}