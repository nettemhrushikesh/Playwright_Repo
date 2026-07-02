import{test,expect} from '@playwright/test'

test("date picker",async({page})=> {
    await page.goto('https://www.makemytrip.com/');
    await page.locator('.commonModal__close').click();
    await page.getByRole('link', { name: 'Hotels' }).click();
// Open calendar
await page.getByRole('textbox', { name: 'Check-In' }).click();

console.log(await page.locator('div[class="DayPicker-Caption"] div').textContent())
// Open calendar
// Navigate to target month
while ( await expect (page.locator('div[class="DayPicker-Caption"] div').textContent() !== 'September 2026'));
     {
    await page.getByRole('button', { name: 'Next Month' }).click();
    break;
}

// Select specific date
await page.getByLabel('Tue Sep 08').getByText('8').click();



await page.getByRole('button', { name: 'Next Month' }).click();
await page.getByLabel('Tue Sep 08').getByText('8').click();

})
