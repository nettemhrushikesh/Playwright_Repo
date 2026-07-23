import{test , expect} from '@playwright/test';
import { BasePage } from '../pages/Trello_BP';
import { LoginPage } from '../pages/Trello_LP';
import { MainPage } from '../pages/Trello_MP';
import { DATA } from '../testdata/Credentials';
import { authenticator } from "otplib";


test.describe("Trello BasePage Test", ()=> {
    
test(" Trello BasePage Validation", async({page,context})=> {
    const basepage = new BasePage(page,context);
    const loginpage = new LoginPage(page);
    const mainpage = new MainPage(page,context);
    
    
    // BasePage
    await basepage.Navigation(DATA.TrelloURL ?? '');
    await basepage.VerifyURL();
    await basepage.VerifyALLButtonVisibility();
    await basepage.VerifingAllButtonEnabled();
    await basepage.VerifyAllLogoLinksAvailable();
    await basepage.ClickLogin();
    // LoginPage
    await loginpage.EnterEmail(DATA.accountId ?? '');
    await loginpage.ClickContinue();
    await expect(loginpage.PasswordField).toBeVisible();
    await loginpage.EnterPassword(DATA.accountpassword ?? '')
    await loginpage.LoginButton.click()
    const otp = authenticator.generate(DATA.secret ?? '')
    // await page.waitForTimeout(2000);
    // 2FA 
    await loginpage.Verification2FV(otp)

    //  MainPage * Creation and Deletion of the Workspace
    await mainpage.ClickAccountProfile();
    await mainpage.ClickWorkspace();
    await mainpage.FillWorkshopName();
    await mainpage.ClickWorkspacetype(DATA.workspaceType1);
    await mainpage.ClickContinueButton();
    
    // Create New Board
    await mainpage.CreateNewBoard();
    await basepage.goBack()
    await basepage.goForward()

    await mainpage.DeleteworkSpace()
    
});

})