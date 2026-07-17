import { Expect , Page, Locator } from "@playwright/test";
import { BasePage } from "./Basepage";





export class LoginPage extends BasePage {
    
  readonly Trellologo: Locator;
  readonly EmailField: Locator;
  readonly ContinueButton: Locator;
  readonly PasswordField : Locator;
  readonly LoginButton : Locator;
  readonly OTPField : Locator;
  readonly LoginBtn : Locator


    constructor(page : Page){
        super(page)

    this.Trellologo = page.getByTestId('header').locator('svg')
    this.EmailField = page.getByTestId('username')
    this.ContinueButton = page.getByTestId('login-submit-idf-testid')
    this.PasswordField = page.getByTestId('password')
    this.LoginButton = page.getByTestId('login-submit-idf-testid')
    this.OTPField = page.getByRole('textbox', { name: '-digit verification code' })
    this.LoginBtn  = page.getByRole('button',{ name: 'Log in'})

    }
    async EnterEmail(email :string){
        await this.EmailField.fill(email)
    }
    async ClickContinue(){
        await this.ContinueButton.click()
    }
    async EnterPassword(password: string){
        await this.PasswordField.fill(password)
    }
    async Verification2FV(otp: string){
        await this.OTPField.fill(otp)
        await this.LoginBtn.click()
    }
}
