export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public data: any;

  constructor(message: string, statusCode = 500, isOperational = true,data:any) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class DatabaseError extends AppError {
  constructor(message:string,data?:any) {
    
     super(`Database error: ${message}`, 500, true, data);
  }
}




export class AuthError extends AppError {
  constructor(message :string, data?:any) {
     super(`Authentication: ${message}`, 401, true, data);
  }
}


export class JwtTokenError extends AppError {
  constructor(message = "JWT",data?:any) {
     super(`Token: ${message}`, 401, true, data);
  }
}


export class ValidationError extends AppError {
  constructor(message = "Validation failed",data?:any) {
     super(`Validation: ${message}`, 400, true, data);
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict", data?: any) {
    super(`Conflict: ${message}`, 409, true, data);
  }
}
