// infrastructure/auth/localAuthService.ts
import bcrypt from "bcrypt";

export class LocalAuthService {
  async comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}