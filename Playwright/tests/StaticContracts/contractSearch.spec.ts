import { test, expect } from '../fixtures';

test('Search: compare search result price with total amount in details', async ({ page }) => {

// Click the select box next to the "Hotel" label
await page.locator('label:has-text("Hotel") + div .select2-selection--single').click();
// ensure to pick the acctive search field
await page.locator('.select2-container--open .select2-search__field').fill('Alina Test');
//await page.locator('.select2-results__option', { hasText: 'ALINA TEST' }).click();
await page.getByRole('option', { name: 'ALINA TEST' }).click();
await page.getByRole('button', { name: 'Search' }).click();
await expect(page.locator('.table-responsive')).toBeVisible();
const contractPrice = await page.locator('.contract-price').first().innerText();
console.log('Contract price:', contractPrice);

const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.getByRole('link', { name: 'Select Quotation' }).first().click()
]);

// Now you can interact with the new tab
const totalAmount = await newPage.locator('tr.total >> td').nth(1).innerText();
console.log('Total amount:', totalAmount);


// Compare contractPrice and totalAmount
expect(contractPrice).toBe(totalAmount);
});
