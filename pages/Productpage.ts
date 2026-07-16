import { expect, Page } from '@playwright/test';
import { BasePage } from './Basepage';

export class ProductsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }
  appLogo = this.page.locator('.app_logo');
  productsTitle = this.page.locator('.title');
  burgerMenu = this.page.locator('#react-burger-menu-btn');

  cartIcon = this.page.locator('.shopping_cart_link');
  sortDropdown = this.page.locator('[data-test="product-sort-container"]');

  inventoryItems = this.page.locator('.inventory_item');

  footerText = this.page.locator('.footer_copy');

  twitterIcon = this.page.locator('.social_twitter');
  facebookIcon = this.page.locator('.social_facebook');
  linkedinIcon = this.page.locator('.social_linkedin');

  async verifyProductPage() {
    await expect(this.appLogo).toBeVisible();
    await expect(this.productsTitle).toHaveText('Products');
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async verifyBurgerMenuOptions() {
    await this.burgerMenu.click();
    await expect(this.page.locator('#inventory_sidebar_link')).toBeVisible();
    await expect(this.page.locator('#about_sidebar_link')).toBeVisible();
    await expect(this.page.locator('#logout_sidebar_link')).toBeVisible();
    await expect(this.page.locator('#reset_sidebar_link')).toBeVisible();
    await this.page.locator('#react-burger-cross-btn').click();
  }

  async verifyTopRightControls() {
    await expect(this.cartIcon).toBeVisible();
    await expect(this.sortDropdown).toBeVisible();
  }

  async verifyInventoryList() {
    const itemCount = await this.inventoryItems.count();
    expect(itemCount).toBeGreaterThan(0);
  }

  async sortProductsLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async verifyProductSorting() {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    const actualPrices = prices.map(price =>Number(price.replace('$', '')));
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);
    expect(actualPrices).toEqual(expectedPrices);
  }

  async verifyFooter() {
    await expect(this.footerText).toBeVisible();
    await expect(this.footerText).toContainText('Sauce Labs');
  }

  async verifySocialIcons() {
    await expect(this.twitterIcon).toBeVisible();
    await expect(this.facebookIcon).toBeVisible();
    await expect(this.linkedinIcon).toBeVisible();
  }

  async clickAbout() {
    await this.burgerMenu.click();
    await this.page.locator('#about_sidebar_link').click();
  }

  async logout() {
    await this.burgerMenu.click();
    await this.page.locator('#logout_sidebar_link').click();
  }
}