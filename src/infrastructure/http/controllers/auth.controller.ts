// infrastructure/http/controllers/AuthController.ts
import { NextFunction, Request, Response } from "express";
import { AuthRepositoryPg } from "../../database/ps/auth.repository.ps";
import { LocalAuthService } from "../../services/auth.service";
import { JwtService } from "../../services/jwt.service";
import { LoginLocalUseCase } from "../../../application/usecases/auth/login.local.usecase";
import { RegisterLocalUseCase } from "../../../application/usecases/auth/register.local.usecase";
import { ApiResponse } from "../response/api.response";
import { UserRepositoryPg } from "../../database/ps/user.repository.ps";
import { RoleRepositoryPg } from "../../database/ps/role.repository";
import { SchoolRepositoryPg } from "../../database/ps/school.repository.ps";

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


   async register(req: Request, res: Response, next:NextFunction) {
    try {
      const { email, password, username } = req.body;

      const useCase = new RegisterLocalUseCase(
        new AuthRepositoryPg(),
        new LocalAuthService(),
        new UserRepositoryPg(),
        new RoleRepositoryPg(),
        new SchoolRepositoryPg(),
        new JwtService()
      );

      const result = await useCase.execute(username, email, password);
     

      ApiResponse.success(res,{
        ...result
      },"User registered successfully",200)

    } catch (err: any) {
        next(err)
    }
  }
}