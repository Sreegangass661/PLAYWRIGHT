import { test, expect } from '@playwright/test';
test('Multiple windows in playwright', async ({ page ,context}) => {
    await page.goto("https://demo.guru99.com/popup.php")
    const clickbutton=page.locator("//a[text()='Click Here']")
    await clickbutton.click()
    const popup= context.waitForEvent('page')//wait for new page to open
    const childpage=await popup//get the new page
    await childpage.waitForLoadState()//wait for the new page to load Ensures the popup page is fully loaded before interacting
  const email=childpage.locator("//input[@name='emailid']")
  await email.fill("obsqura@gmail.com")
  const submit=childpage.locator("//input[@name='btnLogin']")
  await submit.click()
})

//ONLY TESTCASE IS FAIL