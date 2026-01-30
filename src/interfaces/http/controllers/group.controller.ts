
import { Request, Response, NextFunction } from "express";

import { ApiResponse } from "@/interfaces/http/response/api.response";

export class GroupController {
  
    async create(req: Request, res: Response, next:NextFunction) {
    try {
      
    } catch (err: any) {
        next(err);
    }
  }


   async delete(req: Request, res: Response, next:NextFunction) {
    try {
      
    } catch (err: any) {
        next(err);
    }
  }

   async update(req: Request, res: Response, next:NextFunction) {
    try {
      
    } catch (err: any) {
        next(err)
    }
  }
}
