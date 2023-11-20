<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import type { SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';

	$: key = 'Loading Key...';
	let input = '';
	let completed = false;
	let error = false;
	const menuData: SideMenuData = {
		header: '6. Countersign',
		content:
			'<p>You got your passcode but only the encypted version is accepted by the server. Send your pass code to <strong>/api/getkey</strong> using a POST request with plain text to receive your encrypted key and enter it into the reponse input to receive your reward.</p>',
		next: '',
		previous: '/challenges/5-create-a-quote',
		difficulty: 'Hard'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tip',
			content: 'Try using an API Request Context',
			link: 'https://playwright.dev/docs/api/class-apirequestcontext'
		},
		{
			title: 'Cypress Tip',
			content: 'Try using .request()',
			link: 'https://docs.cypress.io/api/commands/request'
		}
	];

	onMount(async () => {
		const response = await fetch('/api/getkey');
		const json = await response.json();
		key = json.key;
	});
	const handleSubmit = async () => {
		try {
			const response = await fetch('/api/validatekey', {
				method: 'POST',
				body: JSON.stringify({
					input: input,
					key: key
				})
			});
			const { result } = await response.json();
			if (result) {
				completed = true;
				error = false;
			} else {
				completed = false;
				error = true;
			}
		} catch (Error) {
			console.log(Error);
		}
	};
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<form
		on:submit|preventDefault={handleSubmit}
		class="flex flex-col lg:min-h-[13rem] lg:min-w-[21rem]"
	>
		<Input value={key} type="text" disabled={true} label="Your pass code" />
		<Input bind:value={input} type="text" label="Your Response" />
		<Button type={'submit'} text={'Submit'} />

		{#if completed}
			<CompletedMessage text="Well done! : ASSERTME" />
		{/if}
		{#if error}
			<p class="text-red-500">That is not the correct response</p>
		{/if}
	</form>
</ChallengeLayout>
