import { getdata } from '../utils/excelread2'
import{test,expect} from '@playwright/test' //official test runner of playwright
import{LoginPage} from '../Pages/login'

 
test('Login page test', async({page})=>{
   

const loginpage=new LoginPage(page)
const username=getdata(2,1)
   const password=getdata(2,2)
    await loginpage.goto()
    await loginpage.login(username,password)
    //await loginpage.click()
    // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    
    //const inventorypage=await(await loginpage.goto()).login(data.username,data.password)
})