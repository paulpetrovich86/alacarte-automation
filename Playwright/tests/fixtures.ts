import { test as base } from '@playwright/test';

type Fixtures = {
  loggedInPage: any;
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    // Login steps
    await page.goto('https://pre.alacarte.ae/');
    await page.getByRole('textbox', { name: 'Email' }).fill('testing@pre.alacarte.ae');
    await page.getByRole('textbox', { name: 'Password' }).fill('B\\SO?2r)Cd');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Pass the logged-in page to tests
    await use(page);
  },
});

export { expect } from '@playwright/test';