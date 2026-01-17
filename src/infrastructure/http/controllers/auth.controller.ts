// infrastructure/http/controllers/AuthController.ts
import { Request, Response } from "express";
import { AuthRepositoryPg } from "../../database/ps/auth.repository.ps";
import { LocalAuthService } from "../../auth/auth.service";
import { JwtService } from "../../auth/jwt.service";
import { LoginLocalUseCase } from "../../../application/usecases/auth/login.local.usecase";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const useCase = new LoginLocalUseCase(
        new AuthRepositoryPg(),
        new LocalAuthService(),
        new JwtService()
      );

      const result = await useCase.execute(email, password);
      res.json(result);
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  }
}