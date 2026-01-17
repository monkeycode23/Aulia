// infrastructure/auth/jwtService.ts
import jwt from "jsonwebtoken";

export class JwtService {
  private secret = process.env.JWT_SECRET || "secret";

  generate(userId: string) {
    return jwt.sign({ userId }, this.secret, { expiresIn: "15m" });
  }

  verify(token: string) {
    return jwt.verify(token, this.secret);
  }
}
