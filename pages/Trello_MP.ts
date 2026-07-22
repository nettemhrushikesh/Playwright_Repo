import {test,expect, Page, Locator} from '@playwright/test'
import { BasePage } from './Trello_BP';
import { workspace } from '../testdata/Credentials';

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
    readonly DeleteNotification : Locator


    constructor(page:Page) {
        super(page)
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
    async DeleteworkSpace(){
        await this.SettingsButton.click()
        await this.DeleteButton.click()
        await this.DeleteConfirmField.fill(workspace)
        await this.DeleteConfirmButton.click()
    }
    
}