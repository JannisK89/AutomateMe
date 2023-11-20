<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import type { SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import Button from '$lib/components/Button.svelte';

	let completed = false;
	const menuData: SideMenuData = {
		header: '1. Press the button',
		content:
			"<p>Let's start with a simple one. Just press the <strong>button</strong> and you will get your assert code.<p>",
		next: '/challenges/2-log-in',
		previous: '/',
		difficulty: 'Easy'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tip',
			content: 'Try using .click()',
			link: 'https://playwright.dev/docs/api/class-locator#locator-click'
		},
		{
			title: 'Cypress Tip',
			content: 'Try using .click()',
			link: 'https://docs.cypress.io/api/commands/click'
		}
	];

	const clickHandler = () => (completed = true);
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<div class="flex flex-col items-center lg:min-h-[13rem] lg:min-w-[21rem]">
		<h1 class="text-3xl lg:text-3xl font-bold pb-4">Press the button!</h1>
		<Button onClick={clickHandler} text="Press Me" />
		{#if completed}
			<CompletedMessage text="You made it! Your assert code: ASSERTME" />
		{/if}
	</div>
</ChallengeLayout>
