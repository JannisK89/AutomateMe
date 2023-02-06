<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import type { SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import User from '$lib/components/User.svelte';
	import { onMount } from 'svelte';

	type User = {
		name: string;
		age: number;
	};

	let completed = false;
	let users: User[] = [];
	const menuData: SideMenuData = {
		header: '4. Bad Data',
		content:
			"<p>It's pretty common that the back end is missing test data that we need to test something on the front end.</p> <p>The data we are fetching from the API is not what we need, we need a user that is at least 40 years old.</p>",
		next: '/challenges/5-create-a-quote',
		previous: '/challenges/3-mr-robot',
		difficulty: 'Medium'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tip',
			content: 'Try using .route()',
			link: 'https://playwright.dev/docs/network#handle-requests'
		},
		{
			title: 'Cypress Tip',
			content: 'Try using .intercept()',
			link: 'https://docs.cypress.io/guides/guides/network-requests'
		}
	];

	const getUsers = async () => {
		const response: Response = await fetch('/api/users');
		const data: User[] = await response.json();

		users = data;
	};

	onMount(async () => {
		await getUsers();
		users.forEach((user) => {
			if (user.age >= 40) {
				completed = true;
			}
		});
	});
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<div class="flex flex-col items-center lg:min-h-[13rem] lg:min-w-[21rem]">
		<h1 class="text-3xl lg:text-3xl font-bold mb-10">Users</h1>
		<table class="mb-8">
			<tr class="flex flex-col">
				<div class="flex ">
					<p class="border border-slate-300 p-4 min-w-[10rem] max-w-[10rem] flex justify-center">
						Name
					</p>
					<p class="border border-slate-300 p-4 min-w-[3rem] max-w-[3rem] flex justify-center">
						Age
					</p>
				</div>
			</tr>
			{#each users as user}
				<User {...user} />
			{/each}
		</table>
		{#if completed}
			<CompletedMessage text="Good job! Your assert code: ASSERTME" />
		{:else}
			<p class="text-red-500">No user is over the age of 40</p>
		{/if}
	</div>
</ChallengeLayout>
