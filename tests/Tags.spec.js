import { test, expect } from '@playwright/test';
test.beforeEach('alert in playwright', async ({ page }) => {//beforeEach Reusable setup Avoids repeating page.goto()
await page.goto("https://www.saucedemo.com/")
})
const validdata = require('../Utils/testdatacredentials.json')
test('@smoke Login with valid credentials', async ({ page }) => {
  //const usernamevalue = validdata.username;
  //const passwordvalue = validdata.password;

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");
});


    test('@smoke Login with invalid credentials', async ({ page }) => {
    await page.locator("#user-name").fill("standar")
    await page.locator("#password").fill("secre")
    await page.locator("#login-button").click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html")
    //await expect(page.locator("//span[@data-test='title']")).toHaveText("Products")
       //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service") 
    })
    test('Login with invalidusername & valid credentials', async ({ page }) => {
    await page.locator("#user-name").fill("standar")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html")
    //await expect(page.locator("//span[@data-test='title']")).toHaveText("Products")
       //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service") 
    })
    test('Login with validusername & invalid credentials', async ({ page }) => {
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauceee")
    await page.locator("#login-button").click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html")
    //await expect(page.locator("//span[@data-test='title']")).toHaveText("Products")
       //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service") 
    })
   
