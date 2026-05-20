import { test, expect } from '@playwright/test';
test('calender Playwright Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const enterDate =page.locator("#single-input-field")
    await enterDate.click()
    const targetYear=1997
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()
    const switchButton=page.locator('.datepicker-switch:visible ')
    await switchButton.click()
    await switchButton.click()
    let attempts=10 
    while(attempts--){
    
        const decadeTest=await switchButton.innerText()
        const startYear=parseInt(decadeTest.split('-')[0].trim())
        if(targetYear>=startYear && targetYear<=startYear+9)break
            await page.locator('.prev:visible').click()
    }
        await page.locator('.year:visible').filter({hasText:'1996'}).click()
        await page.locator('.month:visible').filter({hasText:'Mar'}).click()
        await page.locator('.day:visible').filter({hasText:'20'}).click()
        await page.locator('#button-one').click()

})