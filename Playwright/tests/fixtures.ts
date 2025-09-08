import { test as base, expect } from "@playwright/test";
import loginConfig from "../login.config";

type Fixtures = {
  loggedInPage: any;
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    await page.goto(loginConfig.baseURL);
    await page.getByRole("textbox", { name: "Email" }).fill(loginConfig.email);
    await page
      .getByRole("textbox", { name: "Password" })
      .fill(loginConfig.password);
    await page.getByRole("button", { name: "Sign In" }).click();
    await page.waitForTimeout(500); // Wait for potential issues with page data loading
    await use(page);
  },
});

export { expect };
