import{test,expect}from'@playwright/test';
test('Visual testing',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.waitForLoadState('networkidle'); 
await expect(page).toHaveScreenshot('saucedemo.png',
    {threshold: 0.02})
//threshold is the percentage of pixels that can be different between the baseline and the
//  current screenshot for the test to pass. In this case, it allows for a 2% difference in pixels.

})

