import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { ProductsPage } from '../pages/Productpage';
import {username, password , sauceurl} from '../testdata/Credentials';
import { authenticator } from 'otplib';

test('Verify Products Page and Logout', async ({ page, context }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  
  await loginPage.navigate(sauceurl ?? '');
  await loginPage.verifyLoginPageElements();
  await loginPage.login(username ?? '', password ?? '');
  await productsPage.verifyProductPage();
  await expect(productsPage.productsTitle).toBeVisible();
  await expect(productsPage.appLogo).toBeVisible();
  await productsPage.verifyBurgerMenuOptions();
  await productsPage.verifyTopRightControls();
  await productsPage.verifyInventoryList();
  await productsPage.sortProductsLowToHigh();
  await productsPage.verifyProductSorting();
  await productsPage.verifyFooter();
  await productsPage.clickAbout();
  await expect(page).toHaveURL(/saucelabs/i);
  await page.goBack();
  await productsPage.verifyProductPage();
  await productsPage.verifySocialIcons();
  const [twitterPage] = await Promise.all([context.waitForEvent('page'), page.locator('.social_twitter a').click()]);
  await twitterPage.waitForLoadState();
  expect(twitterPage.url()).toMatch(/twitter|x\.com/i);
  await twitterPage.close();
  const [facebookPage] = await Promise.all([context.waitForEvent('page'), page.locator('.social_facebook a').click()]);
  await facebookPage.waitForLoadState();
  expect(facebookPage.url()).toContain('facebook');
  await facebookPage.close();
  const [linkedinPage] = await Promise.all([context.waitForEvent('page'),page.locator('.social_linkedin a').click()]);
  await linkedinPage.waitForLoadState();
  expect(linkedinPage.url()).toContain('linkedin');
  await linkedinPage.close();
  await productsPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});