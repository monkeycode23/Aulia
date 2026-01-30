import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../shared/errors/app.errors";
import { ApiResponse } from "../response/api.response";

export function exceptionHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {

    return ApiResponse.error(res, err.data,err.message , err.statusCode);
  }

  return ApiResponse.error(res, {message:err.message},"Internal Server Error", 500);
}
