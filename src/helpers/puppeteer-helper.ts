import { Page, TimeoutError } from "puppeteer";

export class PuppeteerHelper {
  static async extractImgSrcFrom(
    page: Page,
    selector: string,
  ): Promise<string | null> {
    try {
      await page.waitForSelector(selector, { timeout: 7_000 });

      return await page.$eval(selector, (img) => img.getAttribute("src"));
    } catch (error) {
      if (error instanceof TimeoutError) {
        console.log(`element (${selector}) not found. Skipping...`);
        return null;
      }

      throw error;
    }
  }

  static async isElementExists(page: Page, selector: string): Promise<boolean> {
    try {
      await page.waitForSelector(selector, { timeout: 3_000 });
      return true;
    } catch {
      return false;
    }
  }
}