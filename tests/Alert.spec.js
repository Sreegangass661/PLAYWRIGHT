import { test, expect } from '@playwright/test';
test('alert in playwright', async ({ page }) => {
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a Javascript alert box!')
    await dialog.accept()//
})
const button=page.locator("//button[@onclick='jsAlert()']")
await button.click()
})

test.only('prompt alert in playwright', async ({ page }) => {
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Please enter your name')
    await dialog.accept("welcome")//to send the value in prompt alert
})
const button=page.locator("//button[@onclick='jsPrompt()']")
await button.click()
})