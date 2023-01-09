import { BaseError } from "./base-error";

export class PostNotFoundError extends BaseError {
  constructor() {
    super("Post not found", 404);
  }
}