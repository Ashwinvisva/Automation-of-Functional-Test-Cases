import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.getByPlaceholder('Search publications, articles').click();
  await page.getByPlaceholder('Search publications, articles').fill('data science');
  await page.getByLabel('Submit Search').click();
});
test.setTimeout(60000); // 60 seconds
