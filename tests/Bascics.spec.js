import{test,expect} from '@playwright/test' //official test runner of playwright
/*test('Browser Context Playwright Test', async({browser})=>{ //tsetcase name 
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://selenium.qabible.in/")
})*/

test.only('page playwright test', async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const title=await page.title()
    console.log(title)//get title
    await expect(page).toHaveTitle("Obsqura Testing")//assertion
    
})
