
import { test, expect } from '@playwright/test';
test('Wait in playwright', async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const dropdown = page.locator("//select[@id='dropdowm-menu-1']")//
    await dropdown.selectOption({ value:'c#' })//select by value
    await dropdown.selectOption({ label: "JUnit" })//select by label
    await dropdown.selectOption({ index: 3 })//select by index


})

//check box
//checkbox.check()//check the checkbox
//checkbox.uncheck()//uncheck the checkbox
//checkbox.isChecked()//return true or false inside console.log
//https://demo.guru99.com/popup.php