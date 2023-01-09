import { Response } from 'express';
import { BaseError } from './base-error';

export class ErrorHandler {
  static handleForWeb(error: any, response: Response) {
    let statusCode = 500;

    console.log(error);

    if (error instanceof BaseError) {
      statusCode = error.statusCode;
    }

    return response.status(statusCode).json({
      message: error.message
    })
  }
}