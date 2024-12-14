import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.getByRole('link', { name: 'Learn about Open Access' }).click();
  await page.goto('https://authorservices.wiley.com/author-resources/Journal-Authors/open-access/index.html');
  await page.getByRole('link', { name: 'About Our Fully Gold Open Access Journals', exact: true }).click();
});
test.setTimeout(60000);