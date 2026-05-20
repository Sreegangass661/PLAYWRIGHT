import { test, expect } from '@playwright/test';
test('Locators Playwright Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    const message=page.locator("#single-input-field")//
    await message.type("hello")
    await message.fill("welcome")//clear and type
    page.locator('.form-control')//dupilcates
    page.locator("input[@id='single-input-field']")//xpath
    const button=page.locator("//button[@id='button-one']")//xpath
    await button.click()



})