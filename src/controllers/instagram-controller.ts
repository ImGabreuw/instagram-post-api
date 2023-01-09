import e, { Request, Response } from 'express';
import { ErrorHandler } from '../services/errors/error-handler';
import { InstagramService } from '../services/instagram-service';

export class InstagramController {
  async getUserLastPosts(request: Request, response: Response) {
    const { username } = request.params;

    try {
      const posts = await new InstagramService().extractLastPost(username);
      response.json(posts);
    } catch (error) {
      return ErrorHandler.handleForWeb(error, response);
    }
  }
}