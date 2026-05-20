import { test, expect } from '@playwright/test';
import { getdata } from '../utils/excelread2'
test.beforeEach('alert in playwright', async ({ page }) => {//beforeEach Reusable setup Avoids repeating page.goto()
await page.goto("https://www.saucedemo.com/")
})

//const validdata = require('../Utils/testdatacredentials.json')
test.only("Login with valid credentials", async ({ page }) => {
  const usernamevalue = getdata(1,1);
  const passwordvalue = getdata(1,2);

  await page.locator('#user-name').fill(usernamevalue);
  await page.locator('#password').fill(passwordvalue);
  await page.locator('#login-button').click();

  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");
});


    
   
    