<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import { fade } from 'svelte/transition';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	let username: string = '';
	let password: string = '';
	let error = false;
	let completed = false;

	const menuData = {
		header: '2. Log in',
		content:
			'<p>A very common thing to automate, the log in screen.</p> <p>Enter the username <strong>Admin</strong> and the password <strong>SafePass123</strong> and click the log in button to get your assert code</p>',
		next: '/challenges/3-mr-robot',
		previous: '/challenges/1-press-the-button',
		difficulty: 'Easy'
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
	<form
		on:submit|preventDefault={onSubmit}
		class="flex flex-col flex-wrap items-center mx-8 lg:min-h-[24rem] lg:min-w-[26rem] "
	>
		<h1 class="text-3xl lg:text-5xl font-bold">Log in</h1>
		<Input bind:value={username} label="Username" placeholder="Enter your username here" />
		<Input
			bind:value={password}
			type="password"
			label="Password"
			placeholder="Enter your password here"
		/>

		<Button type="submit" text="Log In" />
		{#if completed}
			<CompletedMessage text="Good Job! Your well earned assert code: ASSERTME" />
		{:else if error}
			<div in:fade|local class="text-red-600 text-lg">Error, invalid credentials!</div>
		{/if}
	</form>
</ChallengeLayout>
