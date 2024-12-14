import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.goto('https://wolsupport.wiley.com/s/');
  await page.getByRole('button', { name: 'Contact Support' }).click();
  await page.goto('https://wolsupport.wiley.com/s/contactsupport');
});
test.setTimeout(60000);