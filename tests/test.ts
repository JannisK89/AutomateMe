import { expect, test, type Page } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

const assertme = async (page: Page) => {
	await expect(page.getByText('ASSERTME')).toBeVisible();
};

test('Challenge 1', async ({ page }) => {
	await page.goto('/challenges/1-press-the-button');
	await page.getByRole('button', { name: 'Press Me' }).click();

	await assertme(page);
});

test('Challenge 2', async ({ page }) => {
	await page.goto('/challenges/2-log-in');
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('SafePass123');
	await page.getByRole('button', { name: 'Log In' }).click();

	await assertme(page);
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

	await assertme(page);
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

	await assertme(page);
});

test('Challenge 5', async ({ page }) => {
	await page.goto('/challenges/5-create-a-quote');
	const [dragZone, dropZone] = await page.getByRole('list').all();
	const quote = await page.locator('q').innerText();
	const splitQuote = quote.split(' ');

	for await (const word of splitQuote) {
		await dragZone.getByText(word, { exact: true }).first().dragTo(dropZone);
	}

	await assertme(page);
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

	await rightArrow.click();
	await expect(page.getByRole('heading', { name: '5. Create a quote' })).toBeVisible();

	// Backward
	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '4. Bad Data ' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '3. Mr. Robot' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '2. Log In' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '1. Press the button' })).toBeVisible();

	await leftArrow.click();
	await expect(page.getByRole('heading', { name: '0. Welcome to Daedalus' })).toBeVisible();
});
