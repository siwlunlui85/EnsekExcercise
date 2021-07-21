import { BrowserContext, chromium, Page } from 'playwright';

export default class Current {
  private static currentPage: Page;
  private static currentBrowserContext: BrowserContext;

  public static page(): Page {
    return this.currentPage;
  }

  public static async startContext(url: string) {
    this.currentBrowserContext = await chromium.launchPersistentContext('', {
      headless: false,
    });
    this.currentPage = await this.currentBrowserContext.newPage();
    await this.currentPage.setViewportSize({
      width: 1920,
      height: 1080,
    });

    await this.currentPage.goto(url);
  }

  public static async closeContext() {
    await this.currentBrowserContext?.close();
  }
}
