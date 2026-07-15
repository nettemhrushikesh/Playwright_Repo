import {test , expect} from '@playwright/test'

const searchitems:string[] =['laptop','gift card']; // 'mobile'


// for (const item in searchitems){
// test(`search for ${item}` , async({page}) => {

//    await page.goto('https://demowebshop.tricentis.com/');
//    await page.locator('#small-searchterms').fill(item);
//    await page.locator('#small-searchterms').press('Enter');
//    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item , {ignoreCase:true});

// });

searchitems.forEach((item) =>{
    test(`search for ${item}` , async({page}) => {

   await page.goto('https://demowebshop.tricentis.com/');
   await page.locator('#small-searchterms').fill(item);
   await page.locator('#small-searchterms').press('Enter');
   await expect.soft(page.locator('h2 a').nth(0)).toContainText(item , {ignoreCase:true});

    });
})
