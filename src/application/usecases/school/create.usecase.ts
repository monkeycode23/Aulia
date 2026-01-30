// application/useCases/auth/loginLocal.useCase.ts
import { AuthRepository } from "../../../domain/repositories/auth.repository";
import { LocalAuthService } from "../../../infrastructure/auth/auth.service";
import { JwtService } from "../../../infrastructure/auth/jwt.service";
import { ValidationError } from "../../../shared/errors/app.errors";

export class LoginLocalUseCase {
  constructor(
    private repo: AuthRepository,
    private authService: LocalAuthService,
    private jwtService: JwtService
  ) {}

  async execute(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new ValidationError("Usuario no encontrado",{
        username:"Invalid Credentials",
        passwrd:"Invalid Credentials"
    });

    const valid = await this.authService.comparePassword(password, String(user.passwordHash));
    if (!valid) throw new ValidationError("Usuario no encontrado",{
        username:"Invalid Credentials",
        passwrd:"Invalid Credentials"
    });


    const token = this.authService.generateAccessToken(String(user.id));
    return { user: { id: user.id, email: user.email }, token };
  }
}