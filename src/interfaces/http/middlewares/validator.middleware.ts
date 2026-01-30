import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    

    const firstErrorsPerField: Record<string, string> = {};
      errors.array().forEach((error:any) => {
      if (!firstErrorsPerField[error.path]) {
          firstErrorsPerField[error.path] = error.msg;
      }
         }) 

         return res.status(400).json({ errors: firstErrorsPerField});
    }
       next();
  }

   

