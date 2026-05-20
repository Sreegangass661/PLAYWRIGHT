import { test, expect } from '@playwright/test';
test('movehover in playwright', async ({ page }) => {
    await page.goto('https://selenium.qabible.in/')
    const otherkey=await page.locator('#others')
    await otherkey.hover()
    //await otherkey.click()
    //await page.locator('#others').dblclick();
    await page.locator('#others').click({ button: 'right' });
        
})