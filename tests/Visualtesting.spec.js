import{test,expect}from'@playwright/test';
test('Visual testing',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.waitForLoadState('networkidle'); 
await expect(page).toHaveScreenshot('saucedemo.png',
    {threshold: 0.02})

})

