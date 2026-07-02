import { test, expect } from "@playwright/test";
import { describe } from "node:test";

const logindata: string[][] = 
   [['arora@gmail.com','arora@123','valid'],
   ['abc@gmail.com', 'test123', 'invalid'],
   ["","","invalid"]]
   //['bobb@gmail.com', 'bobb@123', 'valid'],
   

for (const [email, password, validity] of logindata) {

   test.describe('login page check', () => {

      test(`Verifing login page ${email} and ${password}`, async ({ page }) => {


         await page.goto("https://demowebshop.tricentis.com/");
         await page.getByRole('link', { name: 'Log in' }).click();
         await page.getByRole('textbox', { name: 'Email:' }).click();
         await page.getByRole('textbox', { name: 'Email:' }).fill(email);
         await page.getByRole('textbox', { name: 'Email:' }).press('Enter');
         await page.getByRole('textbox', { name: 'Password:' }).click();
         await page.getByRole('textbox', { name: 'Password:' }).fill(password);
         await page.getByRole('button', { name: 'Log in' }).click();

         if(validity.toLowerCase() === 'valid'){
            const logoutbuttom =  page.getByRole('link', { name: 'Log out' });
            await expect(logoutbuttom).toBeVisible({timeout:5000});
            console.log("this is valid");
         }
         else{
            const errormessage = page.getByText('Login was unsuccessful.');
            await expect(errormessage).toBeVisible({timeout:5000});
            console.log("this is invalid");

         }

      });

   });


}



// await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
// await expect(page.getByText('Login was unsuccessful.')).toBeVisible();
