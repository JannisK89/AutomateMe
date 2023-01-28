<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';

	const menuData = {
		header: '1. Press the button',
		content: 'Its pretty simple, just press the button'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tips',
			content: 'Try using Locator.click',
			link: 'https://playwright.dev/docs/api/class-locator#locator-click'
		}
	];
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<h1 class="text-3xl lg:text-5xl font-bold">Just press the button!</h1>
	<button class="py-6 px-20 rounded-3xl bg-orange-400 my-12 text-3xl font-semibold">Press Me</button
	>
</ChallengeLayout>
