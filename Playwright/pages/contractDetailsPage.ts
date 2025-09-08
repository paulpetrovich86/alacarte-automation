import { Page, Locator } from "@playwright/test";

export class ContractDetailsPage {
  readonly page: Page;
  readonly totalAmount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.totalAmount = page.locator("tr.total >> td").nth(1);
  }

  async getTotalAmount(): Promise<string> {
    return await this.totalAmount.innerText();
  }
}
