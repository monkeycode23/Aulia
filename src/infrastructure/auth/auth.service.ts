// infrastructure/auth/localAuthService.ts
import bcrypt from "bcrypt";
import { JwtService } from "./jwt.service";
import { prisma } from "../../../src/infrastructure/database/ps/prisma";

export class LocalAuthService {
  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async hashPassword(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, 10);
  }

  generateAccessToken(userId: string): string {
    const jwt = new JwtService();

    return jwt.generate({ userId },"1h");
  }

  verifyAccessToken(token: string): any {
    const jwt = new JwtService();

    return jwt.verify(token);
  }

  async generateRefreshToken(userId: string): Promise<any> {
    const jwt = new JwtService();

    const token = jwt.generate({ userId }, "7d");

    const res = await prisma.token.create({
      data: {
        type: "REFRESH",
        token,
        expiresAt: "",
        user: {
          connect: { id: userId },
        },
      },
    });

    if (!res) throw new Error("Cannot create user refresh token on db");

    return token;
  }

  async verifyRefreshToken(userId: string): Promise<any> {
    const jwt = new JwtService();

    const res = await prisma.token.findFirst({
      where: {
        userId,
        type: "REFRESH",
      },
    });

    if (!res) throw new Error("Cannot find user refresh token on db");

    return jwt.verify(res.token);
  }



 
}
