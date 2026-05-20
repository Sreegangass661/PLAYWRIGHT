import{test,expect} from '@playwright/test' //official test runner of playwright
import{LoginPageMain} from '../Pages/LoginpageMain'
//import validdata from '../utils/testdatacredentials.json'
test('Login page test', async({page})=>{
    const loginpage=new LoginPageMain(page)
    await loginpage.goto()
    await loginpage.login("standard_user","secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")    
})