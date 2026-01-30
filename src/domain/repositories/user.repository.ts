import { User } from "../entities/user.entity";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
   findById(id: string): Promise<User | null>
  create(data: any): Promise<User>

  update(id: string, data: Partial<User>): Promise<User | null>

  delete(id: string): Promise<boolean>

  findAll(): Promise<User[]>
}