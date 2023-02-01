<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import type { SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';

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
	<div class="flex flex-col items-center min-h-[13rem] min-w-[21rem]">
		<h1 class="text-3xl lg:text-3xl font-bold">Press the button!</h1>
		<button
			on:click={clickHandler}
			class="py-6 px-20 rounded-3xl bg-sky-500 hover:bg-sky-500/80 my-8 text-2xl font-semibold"
			>Press Me</button
		>
		{#if completed}
			<CompletedMessage text="You made it! Your assert code: ASSERTME" />
		{/if}
	</div>
</ChallengeLayout>
