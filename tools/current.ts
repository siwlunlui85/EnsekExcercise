import { BrowserContext, Page } from 'playwright-core';

export default class Current {
  private static currentPage: Page;
  private static currentBrowserContext: BrowserContext;

  public static page(): Page {
    return this.currentPage;
  }

  public static async startContext(url: string) {
    this.currentPage = page;
    await this.currentPage.setViewportSize({
      width: 1440,
      height: 819,
    });
    await this.currentPage.goto(url);
    this.currentBrowserContext = context;
  }

  public static async closeContext() {
    await this.currentBrowserContext.close();
  }
}