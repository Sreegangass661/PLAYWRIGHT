import{test,expect} from '@playwright/test' //official test runner of playwright
import{LoginPage} from '../Pages/login'
test('Login page test', async({page})=>{
    const loginpage=new LoginPage(page)
    const inventorypage=await(await loginpage.goto()).login("standard_user","secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})