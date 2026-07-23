import {test,expect, Page, Locator, BrowserContext} from '@playwright/test'
import { BasePage } from './Trello_BP';
import { workspace } from '../testdata/Credentials';
import { waitForDebugger } from 'node:inspector';

export class MainPage extends BasePage {
    readonly AccountIcon  : Locator;
    readonly CreateWorkspaceIcon  : Locator;
    readonly WorkspaceNameField  : Locator;
    readonly WorkspaceTypeFieldDropdown  : Locator;
    readonly WorkspaceTypeFieldListBox  : Locator;
    readonly WorkspaceDescriptionField  : Locator;
    readonly ContinueButton  : Locator;
    readonly SettingsButton : Locator;
    
    readonly DeleteButton : Locator;
    readonly DeleteConfirmField : Locator;
    readonly DeleteConfirmButton :  Locator;
    readonly DeleteNotification : Locator;
    
    readonly NewBoard : Locator;
    readonly CreateBoard : Locator;
    readonly BoardtitleField : Locator;
    readonly CreateBoardSubmitButton : Locator;
    readonly BackToHome : Locator;
    readonly TeamTab : Locator;


    constructor(page:Page, Context:BrowserContext) {
        super(page,Context)
    this.AccountIcon =  page.getByTestId('header-member-menu-button');
    this.CreateWorkspaceIcon = page.getByTestId('account-menu-workspace-creation-button')
    this.WorkspaceNameField = page.getByTestId('header-create-team-name-input')
    this.WorkspaceTypeFieldDropdown =  page.getByText('Choose…')
    this.WorkspaceDescriptionField = page.getByRole('textbox', { name: 'Workspace description Optional' })
    this.WorkspaceTypeFieldListBox =  page.getByTestId('header-create-team-type-input-select--listbox')
    this.ContinueButton = page.getByTestId('header-create-team-submit-button')
    this.AccountIcon =  page.getByTestId('header-member-menu-button');
    this.CreateWorkspaceIcon = page.getByTestId('account-menu-workspace-creation-button')
    this.WorkspaceNameField = page.getByTestId('header-create-team-name-input')
    this.WorkspaceTypeFieldDropdown =  page.getByText('Choose…')
    this.WorkspaceDescriptionField = page.getByRole('textbox', { name: 'Workspace description Optional' })
    this.WorkspaceTypeFieldListBox =  page.getByTestId('header-create-team-type-input-select--listbox')
    this.ContinueButton = page.getByTestId('header-create-team-submit-button')
    this.SettingsButton = page.getByTestId('open-settings-link')

    this.NewBoard = page.getByTestId('create-board-tile')
    this.CreateBoard = this.NewBoard.getByRole('button',{name : 'Create board'})
    this.BoardtitleField = page.getByTestId('create-board-title-input')
    this.CreateBoardSubmitButton = page.getByTestId('create-board-submit-button')
    this.BackToHome = page.getByRole('link', { name: 'Back to home' })
    this.TeamTab =  page.getByTestId('home-team-tab-section-6a622d391c203b6381e53f68').getByRole('link', { name: 'S Sataru Gojo' })

    this.DeleteButton = page.getByTestId('delete-workspace-button')
    this.DeleteConfirmField = page.getByTestId('delete-workspace-confirm-field')
    this.DeleteConfirmButton = page.getByTestId('delete-workspace-confirm-button')
    this.DeleteNotification = page.getByRole('heading', { name: 'The Workspace "taaco" has' })
    
    }
    async ClickAccountProfile(){
        await this.AccountIcon.click()
    }
    async ClickWorkspace(){
        await this.CreateWorkspaceIcon.click()
    }
    async FillWorkshopName(){
        await this.WorkspaceNameField.fill(workspace)
    }
    async ClickWorkspacetype(Option : string){
        await this.WorkspaceTypeFieldDropdown.click()
        await this.WorkspaceTypeFieldListBox.getByText(Option).click()
    }
    async ClickContinueButton(){
        await this.ContinueButton.click()
    }
    async CreateNewBoard(){
        await this.NewBoard.first().click()
        await this.CreateBoard.click()
        await this.BoardtitleField.fill('Jerry')
        await this.CreateBoardSubmitButton.click()
        await this.BackToHome.click()
         await this.TeamTab.click()
    }
    async DeleteworkSpace(){
        await this.SettingsButton.click()
        await this.goBack()
        await this.DeleteButton.click()
        await this.DeleteConfirmField.fill(workspace)
        await this.DeleteConfirmButton.click()
    }
    
}
// await page.getByTestId('create-board-tile').first().click();
// await page.locator('div').filter({ hasText: 'Create board with AIStart' }).nth(4).click();
// await page.getByTestId('create-board-tile').first().click();
// await page.getByTestId('create-board-button').click();
// await page.getByTestId('create-board-title-input').fill('wfwdw');
// await page.getByTestId('create-board-submit-button').click();
// await page.getByRole('link', { name: 'Back to home' }).click();
// await page.getByTestId('home-team-tab-section-6a622d391c203b6381e53f68').getByRole('link', { name: 'S Sataru Gojo' }).click();
// await page.getByTestId('home-team-settings-tab').click();





// await page.getByTestId('header-member-menu-button').click();
// await page.getByTestId('account-menu-workspace-creation-button').click();
// await page.getByTestId('header-create-team-name-input').fill('taco');
// await page.getByText('Choose…').click();
// await page.getByTestId('header-create-team-type-input-select--option-6').click();
// await page.getByTestId('header-create-team-submit-button').click();
// await page.getByTestId('create-board-tile').click();
// await page.getByTestId('create-board-button').click();
// await page.getByTestId('create-board-title-input').click();
// await page.getByTestId('create-board-title-input').fill('taco');
// await page.getByTestId('create-board-title-input').press('Enter');
// await page.getByTestId('open-settings-link').click();