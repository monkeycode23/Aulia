// application/useCases/auth/loginLocal.useCase.ts
import { AuthRepository } from "../../../domain/repositories/auth.repository";
import { LocalAuthService } from "../../../infrastructure/auth/auth.service";
import { JwtService } from "../../../infrastructure/auth/jwt.service";

export class LoginLocalUseCase {
  constructor(
    private repo: AuthRepository,
    private authService: LocalAuthService,
    private jwtService: JwtService
  ) {}

  async execute(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error("Usuario no encontrado");

    const valid = await this.authService.comparePassword(password, user.password);
    if (!valid) throw new Error("Contraseña incorrecta");

    const token = this.jwtService.generate(user.id);
    return { user: { id: user.id, email: user.email }, token };
  }
}