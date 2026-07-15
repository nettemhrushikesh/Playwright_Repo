import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://petstore.swagger.io/');
  await page.getByRole('button', { name: 'Cookie settings' }).click();
  await page.getByRole('button', { name: 'Deny all' }).click();
  await page.getByRole('button', { name: 'post /pet/{petId}/uploadImage', exact: true }).click();
  await page.getByRole('button', { name: 'post /pet', exact: true }).click();
  await page.getByRole('button', { name: 'put /pet', exact: true }).click();
  await page.getByRole('button', { name: 'get /pet/findByStatus', exact: true }).click();
  await page.locator('#operations-store-getOrderById').getByRole('link', { name: '/store/order/{orderId}' }).click();
  await page.getByRole('button', { name: 'get /store/order/{orderId}', exact: true }).click();
  await page.getByRole('button', { name: 'GET /store/order/{orderId} Find purchase order by ID' }).click();
  await page.getByRole('button', { name: 'get /store/order/{orderId}', exact: true }).click();
  await page.getByRole('button', { name: 'DELETE /store/order/{orderId} Delete purchase order by ID' }).click();
  await page.getByRole('button', { name: 'DELETE /store/order/{orderId} Delete purchase order by ID' }).click();
});