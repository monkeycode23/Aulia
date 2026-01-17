// infrastructure/database/authRepositoryPg.ts
import { AuthRepository } from "../../../domain/repositories/auth.repository";
import { User } from "../../../domain/entities/user.entity";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export class AuthRepositoryPg implements AuthRepository {
  async findByEmail(email: string): Promise<User | null> {
    const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (!res.rows[0]) return null;

    const row = res.rows[0];
    return new User(row.id, row.email, row.password, "LOCAL");
  }
}