// infrastructure/http/controllers/AuthController.ts
import { NextFunction, Request, Response } from "express";
import { AuthRepositoryPg } from "@/infrastructure/database/ps/auth.repository.ps";
import { LocalAuthService } from "@/infrastructure/auth/auth.service";
import { JwtService } from "@/infrastructure/auth/jwt.service";
import { LoginLocalUseCase } from "../../../application/usecases/auth/login.local.usecase";
import { RegisterLocalUseCase } from "../../../application/usecases/auth/register.local.usecase";
import { ApiResponse } from "../response/api.response";
import { UserRepositoryPg } from "@/infrastructure/database/ps/user.repository.ps";
import { RoleRepositoryPg } from "@/infrastructure/database/ps/role.repository.ps";
import { SchoolRepositoryPg } from "@/infrastructure/database/ps/school.repository.ps";
import { PersonRepositoryPg } from "@/infrastructure/database/ps/person.repository.ps";

export class AuthController {
  
    async login(req: Request, res: Response, next:NextFunction) {
    try {
      const { email, password } = req.body;

      const useCase = new LoginLocalUseCase(
        new AuthRepositoryPg(),
        new LocalAuthService(),
        new JwtService()
      );

      const result = await useCase.execute(email, password);
       ApiResponse.success(res,{
        ...result
      },"User registered successfully",200)

    } catch (err: any) {
        next(err);
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
        new PersonRepositoryPg(),
        new JwtService()
      );

      const result = await useCase.execute(username, email, password);
     

      ApiResponse.success(res,{
        ...result
      },"User registered successfully",200)

    } catch (err: any) {
        console.log(err)
         console.log(err.meta)
        next(err)
    }
  }
}