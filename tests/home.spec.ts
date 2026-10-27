import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should open home page with correct title', async ({ page }) => {
    await page.goto('https://automationexercise.com');

    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  test('should display main navigation', async ({ page }) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByRole('link', { name: /Signup \/ Login/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Products/ })).toBeVisible();
  });
});
