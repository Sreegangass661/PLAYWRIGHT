# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Calender.spec.js >> calender Playwright Test
- Location: tests\Calender.spec.js:2:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.year:visible').filter({ hasText: '1996' })

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('calender Playwright Test', async ({ page }) => {
  3  |     await page.goto("https://selenium.qabible.in/date-picker.php")
  4  |     const enterDate =page.locator("#single-input-field")
  5  |     await enterDate.click()
  6  |     const targetYear=1997
  7  |     await expect(page.locator('.datepicker-dropdown')).toBeVisible()
  8  |     const switchButton=page.locator('.datepicker-switch:visible ')
  9  |     await switchButton.click()
  10 |     await switchButton.click()
  11 |     let attempts=10 
  12 |     while(attempts--){
  13 |         const decadeTest=await switchButton.innerText()
  14 |         const startYear=parseInt(decadeTest.split("-")[0].trim())
  15 |         if(targetYear>=startYear && targetYear<=startYear+9){
  16 |             await page.locator('.prev:visible').click()
  17 |         }
> 18 |         await page.locator(`.year:visible`).filter({hasText:'1996'}).click()
     |                                                                      ^ Error: locator.click: Target page, context or browser has been closed
  19 |         await page.locator(`.month:visible`).filter({hasText:'Mar'}).click()
  20 |         await page.locator(`.day:visible`).filter({hasText:'20'}).click()
  21 |         await page.locator('#button-one').click()
  22 |     }
  23 | })
```