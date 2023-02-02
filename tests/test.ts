import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

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

test('Challenge 3', async ({ page }) => {
	await page.goto('/challenges/3-mr-robot');
	const [button1, button2] = await page.getByRole('button', { name: /^[\d]+/ }).all();

	const btn1Length = parseInt(await button1.innerText());
	const btn2Length = parseInt(await button2.innerText());
	const ddTarget = await page.locator('#correctddValue').innerText();

	for (let i = btn1Length; i > 0; i--) {
		await button1.click();
	}
	for (let i = btn2Length; i > 0; i--) {
		await button2.click();
	}

	await page.getByRole('combobox').selectOption(ddTarget);

	await expect(page.getByText('ASSERTME')).toBeVisible();
});

test('Challenge 4', async ({ page }) => {
	const testData = [
		{
			name: 'Elrich',
			age: 40
		},
		{
			name: 'Jian',
			age: 25
		}
	];

	await page.route('**/api/users', (route) =>
		route.fulfill({
			status: 200,
			body: JSON.stringify(testData)
		})
	);

	await page.goto('/challenges/4-bad-data');

	await expect(page.getByText('ASSERTME')).toBeVisible();
});

test('Page navigation should work', async ({ page }) => {
	await page.goto('/');
	const [, leftArrow, rightArrow] = await page.getByRole('link').all();

	// Forward
	await rightArrow.click();
	await expect(page.getByRole('heading', { name: '1. Press the button' })).toBeVisible();

	await rightArrow.click();
	await expect(page.getByRole('heading', { name: '2. Log In' })).toBeVisible();

	await rightArrow.click();
	await expect(page.getByRole('heading', { name: '3. Mr. Robot' })).toBeVisible();

	await rightArrow.click();
	await expect(page.getByRole('heading', { name: '4. Bad Data ' })).toBeVisible();

	// Backward
	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '3. Mr. Robot' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '2. Log In' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '1. Press the button' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '0. Welcome to Daedalus' })).toBeVisible();
});
