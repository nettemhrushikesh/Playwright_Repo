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
    readonly Resources: Locator;
    readonly Email_SignupBar: Locator;
    readonly SignupForTrello: Locator;
    readonly Atlassian_PrivacyPolicy: Locator;
    readonly Integrations: Locator;
    readonly Automation: Locator;
    readonly Automation_Link : Locator;
    readonly Card_mirroring: Locator;
    readonly Browse_Integrations: Locator;
    readonly Compare_plans: Locator;

    // Footers  //
    readonly About: Locator;
    readonly Jobs: Locator;
    readonly Apps: Locator;
    readonly Contact_Us: Locator;
    
    // Logos for Connections // 
    readonly Instagram: Locator;
    readonly Facebook: Locator;
    readonly Twitter: Locator;
    readonly Linkedin: Locator;
    readonly Youtube: Locator;


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

        this.Email_SignupBar =  page.locator('section').filter({ hasText: 'Capture, organize, and tackle' }).getByTestId('ui-email-signup-input')
        this.SignupForTrello = page.locator('section').filter({ hasText: 'Capture, organize, and tackle' }).getByLabel("Sign up for Trello")
        this.Integrations =  page.getByRole('heading', { name: 'Integrations' })
        this.Automation = page.getByRole('heading', { name: 'Automation' })
        this.Card_mirroring =  page.getByRole('heading', { name: 'Card mirroring' })

        // links 

        this.Browse_Integrations = page.getByRole('link', { name: 'Browse Integrations' })
        this.Automation_Link = page.getByRole('link', { name: 'Get to know Automation' })
        this.Compare_plans =  page.getByRole('link', { name: 'Compare plans' })
        this.Atlassian_PrivacyPolicy = page.getByRole('link', { name: 'Atlassian Privacy Policy' }).first()

        // About Information of the Company

        this.About = page.getByRole('link', { name: "About Trello What’s behind" })
        this.Jobs =  page.getByRole('link', { name: 'Jobs Learn about open roles' })
        this.Apps = page.getByRole('link', { name: 'Jobs Learn about open roles' })
        this.Contact_Us = page.getByRole('link', { name: 'Contact us Need anything? Get' })

        // Connection options with the company

        this.Instagram = page.getByRole('link', { name: 'Instagram' })
        this.Facebook = page.getByRole('link', { name: 'Facebook' })
        this.Twitter = page.getByRole('link', { name: 'Twitter' })
        this.Linkedin = page.getByRole('link', { name: 'LinkedIn' })
        this.Youtube = page.getByRole('link', { name: 'Youtube' })


    }
    async Navigation(url:string ){
        await this.page.goto(url)
    }
    async ClickLogin(){
        await this.LoginButton.click();
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

        await expect(this.Email_SignupBar).toBeVisible();
        await expect(this.SignupForTrello).toBeVisible();
        await expect(this.Atlassian_PrivacyPolicy).toBeVisible();
        await expect(this.Integrations).toBeVisible();
        await expect(this.Card_mirroring).toBeVisible();
        await expect(this.Automation).toBeVisible();
        await expect(this.Automation_Link).toBeVisible();


    }
    async VerifyAllLogoLinksAvailable(){
        await expect(this.Instagram).toBeEnabled();
        await expect(this.Facebook).toBeEnabled();
        await expect(this.Twitter).toBeEnabled();
        await expect(this.Linkedin).toBeEnabled();
        await expect(this.Youtube).toBeEnabled();

    }
      async VerifingAllButtonEnabled(){
        await expect(this.LoginButton).toBeEnabled();
        await expect(this.Get_TrelloButton).toBeEnabled();
        await expect(this.FeaturesButton).toBeEnabled();
        await expect(this.Automation).toBeEnabled();
        await expect(this.PlansButton).toBeEnabled();
        await expect(this.PricingButton).toBeEnabled();
        await expect(this.Resources).toBeEnabled();

        await expect(this.Email_SignupBar).toBeEnabled();
        await expect(this.SignupForTrello).toBeEnabled();
        await expect(this.Atlassian_PrivacyPolicy).toBeEnabled();
        await expect(this.Integrations).toBeEnabled();
        await expect(this.Card_mirroring).toBeEnabled();
        await expect(this.Automation).toBeEnabled();
        await expect(this.Automation_Link).toBeEnabled();

    }
    
}