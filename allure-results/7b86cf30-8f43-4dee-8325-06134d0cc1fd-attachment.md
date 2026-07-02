# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paramitarization.spec.ts >> login page check >> Verifing login page abc@gmail.com and test123
- Location: tests\paramitarization.spec.ts:15:11

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://demowebshop.tricentis.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { describe } from "node:test";
  3  | 
  4  | const logindata: string[][] = 
  5  |    [['arora@gmail.com','arora@123','valid'],
  6  |    ['abc@gmail.com', 'test123', 'invalid'],
  7  |    ["","","invalid"]]
  8  |    //['bobb@gmail.com', 'bobb@123', 'valid'],
  9  |    
  10 | 
  11 | for (const [email, password, validity] of logindata) {
  12 | 
  13 |    test.describe('login page check', () => {
  14 | 
  15 |       test(`Verifing login page ${email} and ${password}`, async ({ page }) => {
  16 | 
  17 | 
> 18 |          await page.goto("https://demowebshop.tricentis.com/");
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  19 |          await page.getByRole('link', { name: 'Log in' }).click();
  20 |          await page.getByRole('textbox', { name: 'Email:' }).click();
  21 |          await page.getByRole('textbox', { name: 'Email:' }).fill(email);
  22 |          await page.getByRole('textbox', { name: 'Email:' }).press('Enter');
  23 |          await page.getByRole('textbox', { name: 'Password:' }).click();
  24 |          await page.getByRole('textbox', { name: 'Password:' }).fill(password);
  25 |          await page.getByRole('button', { name: 'Log in' }).click();
  26 | 
  27 |          if(validity.toLowerCase() === 'valid'){
  28 |             const logoutbuttom =  page.getByRole('link', { name: 'Log out' });
  29 |             await expect(logoutbuttom).toBeVisible({timeout:5000});
  30 |             console.log("this is valid");
  31 |          }
  32 |          else{
  33 |             const errormessage = page.getByText('Login was unsuccessful.');
  34 |             await expect(errormessage).toBeVisible({timeout:5000});
  35 |             console.log("this is invalid");
  36 | 
  37 |          }
  38 | 
  39 |       });
  40 | 
  41 |    });
  42 | 
  43 | 
  44 | }
  45 | 
  46 | 
  47 | 
  48 | // await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  49 | // await expect(page.getByText('Login was unsuccessful.')).toBeVisible();
  50 | 
```