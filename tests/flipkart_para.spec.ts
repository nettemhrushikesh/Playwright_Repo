import { test, expect } from '@playwright/test';

const mobilephonedata :string[][] = [['div:nth-child(6) > div > .yiQOTv > .asbjxx > div > .css-g5y9jx.r-13awgt0 > div > div > div > ._3n8fna1co._3n8fna10j._3n8fnaod._3n8fna1._3n8fnac7._1i2djtb9._1i2djt0 > div > div:nth-child(2) > .css-g5y9jx > div > div > ._3n8fna1co','6 GB RAM | 128 GB ROM','Silk Green'],
                                    ['div:nth-child(6) > div > .yiQOTv > .asbjxx > div > .css-g5y9jx.r-13awgt0 > div > div > div > ._3n8fna1co._3n8fna10j._3n8fnaod._3n8fna1._3n8fnac7._1i2djtb9._1i2djt0 > div > div:nth-child(3) > .css-g5y9jx > div > div > ._3n8fna1co','128 GB + 4 GB','Peach Pink'],
                                     ['.grid-formation > .css-g5y9jx > div > div > ._3n8fna1co','128 GB + 6 GB','Lake Green'],
                                     ['div:nth-child(6) > div > .yiQOTv > .asbjxx > div > .css-g5y9jx.r-13awgt0 > div > div > div > ._3n8fna1co._3n8fna10j._3n8fnaod._3n8fna1._3n8fnac7._1i2djtb9._1i2djt0 > div > div > .css-g5y9jx > div > div > ._3n8fna1co','128 GB + 8 GB','TransOrange']
                                    ]
const basic_info :string[] = ['.css-g5y9jx > div:nth-child(2) > ._1psv1zeb9 > div > div > div:nth-child(2)',
                                  '._1psv1zeb9._1psv1ze0._7dzyg20._1psv1ze9l > div']


    test.describe("validating data",() => {
      test.setTimeout(30000);

for (const [mobilename, features, color] of mobilephonedata){ 


        test(`test for mobiles ${color}`, async ({ page }) => {
         
          await page.goto('https://www.flipkart.com/');
          await page.getByRole('button', { name: '✕' }).click();
          await page.getByRole('link', { name: 'Mobiles' }).click(); 
          // Mobile page opening with the params
          await page.locator(mobilename).first().click();
          // Validating the details of the mobiles
           await expect( page.getByText(features , { exact: true}))
           // Validating the color of mobile
           await expect( page.getByText(color, { exact: true })).toBeVisible()

            await expect(page.getByText('Selected Color:',{ exact: true})).toBeVisible()
              await expect(page.getByText('Delivery details')).toBeVisible()
              await expect(page.getByText('Product highlights')).toBeVisible()
              await expect(page.getByText('All details')).toBeVisible()
              await expect(page.getByText('Ratings and reviews')).toBeVisible()
              await expect(page.getByText('Questions and Answers', { exact: true })).toBeVisible()
            

})
}
})




// await page.locator('.css-g5y9jx > div:nth-child(2) > ._1psv1zeb9 > div > div > div:nth-child(2)').click();
// await page.locator('._1psv1zeb9._1psv1ze0._7dzyg20._1psv1ze9l > div').first().click();