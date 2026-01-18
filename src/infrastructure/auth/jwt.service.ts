// infrastructure/auth/jwtService.ts
import jwt from "jsonwebtoken";

export class JwtService {
  private secret = process.env.JWT_SECRET || "secret";

  generate(data: any,expiresAt: any) {
    return jwt.sign(data, this.secret, { expiresIn: expiresAt ?? "15m" });
  }

  verify(token: string) {
    return jwt.verify(token, this.secret);
  }
}
