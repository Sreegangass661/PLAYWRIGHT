import {Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout} 
from '@cucumber/cucumber'
import { chromium } from 'playwright'
import assert from 'assert'
import path from 'path'
setDefaultTimeout(30000)
let browser,context,page
BeforeAll(async()=>{
    browser=await chromium.launch({headless:false})
})
AfterAll(async()=>{
    await browser.close()
})
Before(async()=>{
    context=await browser.newContext()
    page=await context.newPage()
})
After(async(scenario)=>{
    try{
        if(scenario.result.status===Status.FAILED){
           //const screenshot=await page.screenshot()
           //this.attach(screenshot,'image/png')
           await page.screenshot({
            path:`screenshot/${Date.now()}.png`,
              //path: `screenshot/${new Date().toISOString().split("T")[0]}.png`
           })
        }
    
        }
        catch(error){
            console.error('Error taking screenshot:',error)
        }
        finally{
            if(context){
                await context.close()
            }
        }
}) 
BeforeStep(async(step)=>{
    console.log('${step.pickleStep.text}' )
}) 
AfterStep(async(step)=>{
    console.log(`${step.pickleStep.text}`)
})
Given('user is on application login page',async()=>{
    await page.goto("https://www.saucedemo.com/")
})
When('user logs in the username {string} and password {string}',async (username,password)=>{
    await page.fill('#user-name',username)
    await page.fill('#password',password)
   // await page.click('#login-button')
})
Then('user should see {string}',async(result)=>{
    if(result==="inventory page"){
        await page.waitForSelector("//span[@data-test='title']")
    }
    else if(result==="failure"){
        await page.waitForSelector("//h3[@data-test='error']")
    }
})
Then('inventory item count should be {string}',async(count)=>{
    if(count=='0')return
    const items=await page.locator('.inventory_item').count()
    assert.strictEqual(items,Number(count))
})
