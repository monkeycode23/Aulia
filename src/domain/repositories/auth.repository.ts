import { User } from "../entities/user.entity";

export interface AuthRepository {
  findByEmail(email: string): Promise<User | null>;
}