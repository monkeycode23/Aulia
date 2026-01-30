import { Request, Response, NextFunction } from "express";
import {LocalAuthService} from "../../auth/auth.service";



export async function authRequired(req: Request, res: Response, next: NextFunction) {
  try {
    
   
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
   
    if (!authHeader) return res.status(401).json({ error: "No token provided" });


    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ errors:{token: "Invalid token not provided"} });

    //console.log(token,"tokeeeeeeeeeeeeeeeeeeeeeeen")
    
    const  service = new LocalAuthService();
    const decoded: any = await service.verifyAccessToken(token);

    console.log(decoded,"decoded");
    
    // Guardamos el ID del usuario en la request
    (req as any).userId = decoded.decoded.userId;
    
    

    next();
  } catch (err:any) {
    
    return res.status(401).json({ errors: {token:"expired"} });
  }
}


export async function noAuthRequired(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) return res.status(401).json({ errors:{
      session: "You has already started a session"
    } });

    next();
  } catch (err) {
    return res.status(401).json({ errors:{
      token:"Invalid or expired token"
    }  });
  }
}