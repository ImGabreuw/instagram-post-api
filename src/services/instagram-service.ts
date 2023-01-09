import puppeteer from 'puppeteer';
import { InstagramPostDTO } from '../controllers/dto/instagram-post-dto';
import { PuppeteerHelper } from '../helpers/puppeteer-helper';

export class InstagramService {
  async extractLastPost(username: string): Promise<InstagramPostDTO> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://instagram.com/" + username);

    const lastPostSelector = "article img";
    const isLastPostNotFound = !(await PuppeteerHelper.isElementExists(page, lastPostSelector));

    if (isLastPostNotFound) {
      throw new Error("post not found");
    }

    const post = await PuppeteerHelper.extractImgSrcFrom(page, lastPostSelector) as string;

    await browser.close();

    return {
      username,
      post
    };
  }
}