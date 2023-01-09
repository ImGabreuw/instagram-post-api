export abstract class BaseError {
  constructor(readonly message: string, readonly statusCode: number) { }
}