import{test , expect} from '@playwright/test';
import { BasePage } from '../pages/Trello_BP';
import { LoginPage } from '../pages/Trello_LP';
import { topsecret } from "../testdata/Credentials";
import { authenticator } from "otplib";


test.describe("Trello BasePage Test", ()=> {
    
test(" Trello BasePage Validation", async({page,context})=> {
    const basepage = new BasePage(page);
    const loginpage = new LoginPage(page);
    const otp: string = authenticator.generate(topsecret ?? '')

    await basepage.Navigation();
    await basepage.VerifyURL();
    await basepage.VerifyALLButtonVisibility();
    await basepage.VerifingAllButtonEnabled();
    await basepage.VerifyAllLogoLinksAvailable();
    await basepage.ClickLogin();

    await loginpage.EnterEmail('tojizenin5151@gmail.com');
    await loginpage.ClickContinue();
    await expect(loginpage.PasswordField).toBeVisible();
    await loginpage.EnterPassword('rushi@1234')
    await loginpage.LoginButton.click()
    
    await loginpage.Verification2FV(otp)
});

})