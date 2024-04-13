import { test, expect } from '@playwright/test';
//
test('test', async ({ page }) => {
  await page.goto('https://www.onet.pl/');
  await page.getByLabel('accept and close').click();
  await page.getByRole('navigation').getByRole('link', { name: 'Wiadomości' }).click();
});