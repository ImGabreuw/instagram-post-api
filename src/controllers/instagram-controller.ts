import { Request, Response } from 'express';
import { InstagramService } from '../services/instagram-service';

export class InstagramController {
  async getUserLastPosts(request: Request, response: Response) {
    const { username } = request.params;

    const posts = await new InstagramService().extractLastPost(username);

    response.json(posts);
  }
}