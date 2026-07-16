import { Page } from '@playwright/test';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }
}