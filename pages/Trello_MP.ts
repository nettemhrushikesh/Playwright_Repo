import {test,expect, Page, Locator} from '@playwright/test'
import { BasePage } from './Trello_BP';

export class MainPage extends BasePage {
    readonly AccountIcon  : Locator;
    readonly CreateWorkspaceIcon  : Locator;
    readonly WorkspaceNameField  : Locator;
    readonly WorkspaceTypeFieldDropdown  : Locator;
     readonly WorkspaceTypeFieldListBox  : Locator;
    readonly WorkspaceDescriptionField  : Locator;
    readonly ContinueButton  : Locator;


    constructor(page1:Page) {
        super(page1)
    this.AccountIcon =  page1.getByTestId('header-member-menu-button');
    this.CreateWorkspaceIcon = page1.getByTestId('account-menu-workspace-creation-button')
    this.WorkspaceNameField = page1.getByTestId('header-create-team-name-input')
    this.WorkspaceTypeFieldDropdown = page1.locator("div[data-testid='header-create-team-type-input-select--dropdown-indicator'] span[aria-label='open']")
    this.WorkspaceTypeFieldListBox =  page1.locator('._12ji1r31._1qu2glyw._12y3idpf._2rkofajl._v564r5cv._1h6d1v1w > ._1e0c1txw._4cvr1h6o > ._v564vrg3 > ._1e0c1txw') 
    this.WorkspaceDescriptionField = page1.getByRole('textbox', { name: 'Workspace description Optional' })
    this.ContinueButton = page1.getByTestId('header-create-team-submit-button')
    
    }
    async ClickAccountProfile(){
        await this.AccountIcon.click()
    }
    async ClickWorkspace(){
        await this.CreateWorkspaceIcon.click()
    }
    async FillWorkshopName(){
        await this.WorkspaceNameField.fill('Toji')
    }
    async ClickWorkspacetype(){
        await this.WorkspaceTypeFieldDropdown.click()
        await this.WorkspaceTypeFieldListBox.selectOption('Engineering-IT')
    }
    async ClickContinueButton(){
        await this.ContinueButton.click()
    }

    
}