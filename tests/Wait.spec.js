import { test, expect } from '@playwright/test';
test('Wait in playwright', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.waitForLoadState("networkidle")//wait for network to be idle
    const message = page.locator("#single-input-field")//
    await message.fill("welcome")//clear and ty
})