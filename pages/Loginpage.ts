import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './Basepage';

export class LoginPage extends BasePage {

  readonly logo: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly loginCredentials: Locator;
  readonly passwordCredentials: Locator;

  constructor(page: Page) {
    super(page);

    this.logo = page.locator('.login_logo');
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.getByRole('textbox',{name:"password"})
    this.loginButton = page.locator('#login-button');
    this.loginCredentials = page.locator('#login_credentials');
    this.passwordCredentials = page.locator('.login_password');
  }

  async openApplication(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async verifyLoginPageElements(): Promise<void> {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    await expect(this.page).toHaveTitle("Swag Labs");
    await expect(this.logo).toBeVisible();
    await expect(this.usernameField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.loginCredentials).toContainText('standard_user');
    await expect(this.loginCredentials).toContainText('locked_out_user');
    await expect(this.loginCredentials).toContainText('problem_user');
    await expect(this.passwordCredentials).toContainText('secret_sauce');
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameField.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async verifyUserIsOnLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    await expect(this.loginButton).toBeVisible();
  }
}

