import { test, expect } from "@playwright/test";
//npm install csv-parse
// import fs from 'fs'   // for csv-file//
// import { parse } from "csv-parse/sync";
// const csvpath = 'path.csv';
// const filecontent = fs.readFileSync(csvpath,'utf-8');
//const record = parse(filecontent,{colums:true,skip-empty-lines:true})

import fs from 'fs';
const jsonPath = "testdata/data.json";
const logindata:any = JSON.parse(fs.readFileSync(jsonPath,"utf-8"));
   


   test.describe(`login page check`, async() => {
         for (const {email,password,validity} of logindata) {

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

   }
   });

   