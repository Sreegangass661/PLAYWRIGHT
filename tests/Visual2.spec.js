import{test,expect}from'@playwright/test';
test('Visual testing',async({page})=>{
await page.goto('https://selenium.qabible.in/');
await page.waitForLoadState('networkidle'); 
await page.locator('.carousel.slide').evaluate((element)=>{
element.style.display='none'//to hide the element which is dynamic in nature
})
await expect(page).toHaveScreenshot('qabible.png',
    {threshold: 0.02,maxDiffPixels: 1000})
})

