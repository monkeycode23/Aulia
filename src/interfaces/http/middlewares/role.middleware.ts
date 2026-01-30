import { Request, Response, NextFunction } from "express";
//import User from "../models/User.model";
import {prisma} from '@/infrastructure/database/ps/prisma'

import { PERMISSIONS } from "../../../types/actions";
import { ApiResponse } from "../response/api.response";

// Permite solo usuarios con un rol específico
export function permissionsRequired(actions: PERMISSIONS[]) {

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user =await prisma.user.findFirst({
        where:{id:req.userId},
        include:{
            roles:{
                include:{
                    permissions:true,
                    
                }
            }
        }
      })

      if (!user) throw new Error("User not found");

      const isPermit = user.roles.some((rol)=>{
        return rol.permissions.some((p:any)=>actions.includes(p.name) )
      })

      if (!isPermit) {
        throw new Error("Forbidden: insufficient role");
      }

      next();
    } catch (error: any) {
      ApiResponse.error(res, {
        authroization: error.message,
      },"Permisos insufucientes para ejecutar esta accion");
    }
  };
}

// Permite usuarios con uno de varios roles
