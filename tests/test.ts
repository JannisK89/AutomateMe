import { expect, test } from '@playwright/test';

test('Challenge 1', async ({ page }) => {
	await page.goto('/challenges/1-press-the-button');
	await page.getByRole('button', { name: 'Press Me' }).click();

	await expect(page.getByText('ASSERTME')).toBeVisible();
});

test('Challenge 2', async ({ page }) => {
	await page.goto('/challenges/2-log-in');
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('SafePass123');
	await page.getByRole('button', { name: 'Log In' }).click();

	await expect(page.getByText('ASSERTME')).toBeVisible();
});

test.only('Page navigation should work', async ({ page }) => {
	await page.goto('/');
	const [, leftArrow, rightArrow] = await page.getByRole('link').all();

	// Forward
	await rightArrow.click();
	await expect(page.getByRole('button', { name: 'Press Me' })).toBeVisible();

	await rightArrow.click();
	await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();

	// Backward
	await leftArrow.click();
	await expect(page.getByRole('button', { name: 'Press Me' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: 'What is Daedalus' })).toBeVisible();
});
