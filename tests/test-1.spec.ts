import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').click();
  await page.locator('#kw').fill('test');
  await page.getByRole('button', { name: '百度一下' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'test - 百度翻译 ' }).click();
  const page1 = await page1Promise;
});