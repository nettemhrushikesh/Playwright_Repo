import { test, expect, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  const products:Locator = page.locator("//h2//a[contains(@href,'computer')]");
  const product_count:number = await products.count();
  expect(product_count).toBeGreaterThan(0);
  // console.log("No of computer products:",product_count);
  // console.log(await products.first().textContent());
  // console.log(await products.nth(2).textContent());

  let Allproducts:string[] = await products.allTextContents();
  for (const element of Allproducts)
     {
          // Practicing the branching v-1 jefofeopfeopfejfeo
    console.log(element)
    
  }
});