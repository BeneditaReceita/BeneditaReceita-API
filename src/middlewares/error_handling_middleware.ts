import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from '@/utils/protocols';

export function handleApplicationErrors(
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err.name === 'IncompleteRecipeError') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
      message: err.message,
    });
  }
  if (err.name === 'BadRequestError') {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }
}
