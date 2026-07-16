import { expect, Locator, Page } from "@playwright/test";
export class BasePage {
    protected page : Page

    readonly Logo : Locator;
    readonly LoginButton : Locator;
    readonly Get_TrelloButton  : Locator;
    readonly FeaturesButton : Locator;
    readonly SolutionsButton : Locator;
    readonly PlansButton : Locator;
    readonly PricingButton : Locator;
    readonly Resources  : Locator;

    constructor(page : Page){
        this.page = page;
        this.Logo = page.getByRole('link', { name: 'Atlassian Trello' });
        this.LoginButton = page.getByRole('link', { name: 'Log in', exact: true });
        this.Get_TrelloButton = page.getByRole('link', { name: 'Get Trello for free' });
        this.FeaturesButton = page.getByRole('button', { name: 'Features' });
        this.SolutionsButton = page.getByRole('button', { name: 'Solutions' });
        this.PlansButton = page.getByRole('button', { name: 'Plans' });
        this.PricingButton =page.getByRole('link', { name: 'Pricing', exact: true });
        this.Resources = page.getByRole('button', { name: 'Resources' });
    }
    async Navigation(url: string){
        await this.page.goto(url)
    }
        async getPageTitle() {
        return await this.page.title();
    }

    async reloadPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }
    async VerifyURL(){
        await expect(this.page).toHaveURL("https://trello.com/")
    }
    async VerifyLogo(){
        await expect(this.Logo).toBeVisible();
    }
    async VerifyALLButtonVisibility(){
        await expect(this.LoginButton).toBeVisible();
        await expect(this.Get_TrelloButton).toBeVisible();
        await expect(this.FeaturesButton).toBeVisible();
        await expect(this.SolutionsButton).toBeVisible();
        await expect(this.PlansButton).toBeVisible();
        await expect(this.PricingButton).toBeVisible();
        await expect(this.Resources).toBeVisible();
    }
      async VerifingAllButtonEnabled(){
        await expect(this.LoginButton).toBeEnabled();
        await expect(this.Get_TrelloButton).toBeEnabled();
        await expect(this.FeaturesButton).toBeEnabled();
        await expect(this.SolutionsButton).toBeEnabled();
        await expect(this.PlansButton).toBeEnabled();
        await expect(this.PricingButton).toBeEnabled();
        await expect(this.Resources).toBeEnabled();
    }
    
}



