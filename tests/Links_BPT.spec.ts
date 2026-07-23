import {test,expect,Page ,BrowserContext} from '@playwright/test';
import { BasePage } from '../pages/Trello_BP';
import { DATA } from '../testdata/Credentials';

test("Actionability Check on the BasePage Links",async({page , context})=> {

    const basepage = new BasePage(page ,context);

    await basepage.Navigation(DATA.TrelloURL ?? '');

    // working links

    await basepage.Logo.click();
    await basepage.goBack()
    await basepage.LoginButton.click()
    await basepage.goBack()
    await basepage.Get_TrelloButton.click()
    await basepage.goBack()
    await basepage.FeaturesButton.click()
    await basepage.goBack()
    await basepage.goForward()

   

    await basepage.SolutionsButton.click()
    await basepage.goBack()
    await basepage.goForward()
    await basepage.PlansButton.click()
    await basepage.goBack()
    await basepage.goForward()
    await basepage.PricingButton.click()
    await basepage.goBack()
    await basepage.Resources.click()
    await basepage.goBack()
    await basepage.goForward()
    await basepage.Email_SignupBar.click()
    await basepage.goBack()
    await basepage.goForward()
    await basepage.SignupForTrello.click()
    await basepage.goBack()
    await basepage.goForward()

    // working links 
   const newPage =  await basepage.OpenPrivacyPolicy()
   
    await basepage.CloseTab(newPage)


    await expect(basepage.Integrations).toBeVisible();

    await expect(basepage.Automation).toBeVisible();

    await expect(basepage.Compare_plans).toBeEnabled()
    await basepage.Compare_plans.click()
    await basepage.DoublegoBack()
    await basepage.goForward()

    await expect(basepage.Automation_Link).toBeEnabled()
    await page.waitForLoadState()
    await basepage.Automation_Link.click()
     await basepage.DoublegoBack()
    await basepage.goForward()

    await expect(basepage.Card_mirroring).toBeEnabled()
    await basepage.Card_mirroring.click()
     await basepage.DoublegoBack()
    await basepage.goForward()

    await expect(basepage.Browse_Integrations).toBeEnabled()
    await basepage.Browse_Integrations.click()
    await page.waitForLoadState()
     await basepage.goBack()
    await basepage.About.click()
     await basepage.goBack()
    await basepage.Jobs.click()
     await basepage.goBack()

    await basepage.Apps.click()
    await basepage.goBack()
    await basepage.Contact_Us.click()
     await basepage.goBack()

   const Instagram =  await basepage.PopUpFunction(
    page.getByRole('link', { name: 'Instagram' })
   )
   await page.waitForLoadState()
   await basepage.CloseTab(Instagram);
    
   const Facebook =  await basepage.PopUpFunction(
   page.getByRole('link', { name: 'Facebook' })
   )
   await page.waitForLoadState()
   await basepage.CloseTab(Facebook);

     
   const Twitter =  await basepage.PopUpFunction(
   page.getByRole('link', { name: 'Twitter' })
   )
   await page.waitForLoadState()
   await basepage.CloseTab(Twitter);

     
   const LinkedIn =  await basepage.PopUpFunction(
   page.getByRole('link', { name: 'LinkedIn' })
   )
   await page.waitForLoadState()
   await basepage.CloseTab(LinkedIn);

      
   const Youtube =  await basepage.PopUpFunction(
   page.getByRole('link', { name: 'Youtube' })
   )
   await page.waitForLoadState()
   await basepage.CloseTab(Youtube);

    
})
