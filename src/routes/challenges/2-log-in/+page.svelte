<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import { fade } from 'svelte/transition';

	let username: string = '';
	let password: string = '';
	let error = false;
	let completed = false;

	const menuData = {
		header: '2. Log in',
		content:
			'<p>A very common thing to automate, the log in screen.</p> <p>Enter the username <strong>Admin</strong> and the password <strong>SafePass123</strong> and click the log in button to get your assert code</p>',
		next: '/challenges/3-mr-robot',
		previous: '/challenges/1-press-the-button'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tip',
			content: 'Try using .fill()',
			link: 'https://playwright.dev/docs/api/class-locator#locator-fill'
		},
		{
			title: 'Cypress Tip',
			content: 'Try using .type()',
			link: 'https://docs.cypress.io/api/commands/type'
		}
	];

	const onSubmit = () => {
		if (username.toLowerCase() === 'admin' && password === 'SafePass123') {
			error = false;
			completed = true;
		} else error = true;
	};
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<form on:submit|preventDefault={onSubmit} class="flex flex-col flex-wrap items-center m-8 ">
		<h1 class="text-3xl lg:text-5xl font-bold">Log in</h1>
		<label class="flex flex-col mt-6  mb-4 font-medium">
			Username
			<input
				type="text"
				bind:value={username}
				placeholder="Enter your username here"
				class="border-2 p-2 mt-2 lg:w-80"
			/>
		</label>

		<label class="flex flex-col font-medium mb-4">
			Password
			<input
				type="password"
				bind:value={password}
				placeholder="Enter your password here"
				class="border-2 p-2 mt-2 lg:w-80 "
			/>
		</label>
		<button
			type="submit"
			class="pt-2 pb-4 px-12 mt-4 mb-4 rounded-xl bg-sky-500 hover:bg-sky-500/80 text-3xl font-semibold lg:w-80"
			>Log In</button
		>
		{#if completed}
			<CompletedMessage text="Good Job! Your well earned assert code: ASSERTME" />
		{:else if error}
			<div in:fade|local class="text-red-600 text-lg">Error, invalid credentials!</div>
		{/if}
	</form>
</ChallengeLayout>
