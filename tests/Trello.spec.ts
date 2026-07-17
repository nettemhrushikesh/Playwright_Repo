import{test , expect} from '@playwright/test';
import { BasePage } from '../pages/Trello_BP';


test.describe("Trello BasePage Test", ()=> {
    
test("Navigate to Trello", async({page, context})=> {
    const basepage = new BasePage(page);

    await basepage.Navigation("https://trello.com/");
    await basepage.VerifyURL();
    await basepage.VerifyALLButtonVisibility();
    await basepage.VerifingAllButtonEnabled();
});

})