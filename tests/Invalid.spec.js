import { test, expect } from '@playwright/test';
const dataset=require('../Utils/testdatacredentials.json')//importing data from json file

test.beforeEach('alert in playwright', async ({ page }) => {//beforeEach Reusable setup Avoids repeating page.goto()
await page.goto("https://www.saucedemo.com/")
})

for(const data of dataset){
//"" kodthal athupole work akum ith work akanamegil `` kodukkanam
//"" general text display cheyyan use cheyyum, `` dynamic data display cheyyan use cheyyum
test.only(`Login with invalid credentials ${data.username} ${data.password}`, async ({ page }) => {

    await page.locator("#user-name").fill(data.username)
    await page.locator("#password").fill(data.password)
    await page.locator("#login-button").click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html")
    //await expect(page.locator("//span[@data-test='title']")).toHaveText("Products")
       //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service") 
    })
}
    