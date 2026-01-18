import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      userId?: number; // opcional hasta que se asigne
    }
  }
}
