// application/useCases/auth/loginLocal.useCase.ts
import { AuthRepository } from "../../../domain/repositories/auth.repository";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { LocalAuthService } from "../../../infrastructure/auth/auth.service";
import { JwtService } from "../../../infrastructure/auth/jwt.service";
import { ValidationError } from "../../../shared/errors/app.errors";

export class RegisterLocalUseCase {
  constructor(
    private repo: AuthRepository,
    private authService: LocalAuthService,
    private userRepo: UserRepository,
    private roleRepo: any,
    private schoolRepo: any,
    private jwtService: JwtService,
  ) {}

  async execute(username: string, email: string, password: string) {
    await this.validateUser(username, email);

    //generate password hash
    const passwordHash = await this.authService.hashPassword(password);

    //create user
    const user = await this.createUser(username, email, passwordHash);

    if(!user) return

    //create tokens
    const accessToken =  this.authService.generateAccessToken(user.id!)
    const refresToken =  this.authService.generateRefreshToken(user.id!)

    //generate email verify token

    //send verify email 

    return { user: { id: user.id, email: user.email }, token:accessToken };
  }

  async validateUser(email: string, username: string) {
    let user = await this.repo.findByEmail(email);
    if (user)
      throw new ValidationError("User already exists", {
        email: "This user is already taken",
      });

    user = await this.repo.findByUsername(username);
    if (user)
      throw new ValidationError("User already exists", {
        username: "This user is already taken",
      });
  }

  async createUser(username: string, email: string, passwordHash: string) {
    const princ_role = await this.roleRepo.findByName("PRINCIPAL");
    const user_role = await this.roleRepo.findByName("USER");
    const user = await this.userRepo.create({
      username,
      email,
      passwordHash,
      roles: {
        connect: [{ id: princ_role.id }, { id: user_role.id }],
      },
    });

    await this.schoolRepo.create({
      name: `${username}'s School`,
      principal: {
        connect: { id: user.id },
      },
    });

    return user;
  }
}
