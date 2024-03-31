import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

const errorHandlerGlobal = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandlerGlobal;
