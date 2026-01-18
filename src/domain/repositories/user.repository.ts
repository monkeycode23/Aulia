import { User } from "../entities/user.entity";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
   findById(id: number): Promise<User | null>
  create(data: any): Promise<User>

  update(id: number, data: Partial<User>): Promise<User | null>

  delete(id: number): Promise<boolean>
}