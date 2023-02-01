<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import type { SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import { fly } from 'svelte/transition';
	import { fisherYatesShuffle, randomNumber } from '$lib/utils/random';

	let value1 = randomNumber(50);
	let value2 = randomNumber(50);
	let ddValues = ['Cola', 'Pepsi', 'Fanta', 'Sprite', 'Dr. Pepper'];
	let selectedDDValue = '';
	let correctDDValue = ddValues[randomNumber(ddValues.length)];
	console.log();
	$: completed = selectedDDValue === correctDDValue && value1 === 0 && value2 === 0;

	const menuData: SideMenuData = {
		header: '3. Mr. Robot',
		content:
			'<p> Mr. Robot is in a bad mood! Press each button the number of times displayed on each button and pick the correct soda option from the drop down.</p> <strong>Be aware that Mr. Robot changes his mind often,	 all values are dynamic and change each time!</strong>',
		next: '',
		previous: '/challenges/2-log-in',
		difficulty: 'Hard'
	};

	const tips: TipData[] = [
		{
			title: 'General Tip 1',
			content: 'Try getting the innerText',
			link: 'https://www.w3schools.com/jsref/prop_node_innertext.asp'
		},
		{
			title: 'General Tip 2',
			content: 'Try using for loops',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement'
		},
		{
			title: 'Playwright Tip',
			content: 'Try using .selectOption()',
			link: 'https://playwright.dev/docs/input#select-options'
		},
		{
			title: 'Cypress Tip',
			content: 'Try using .select()',
			link: 'https://docs.cypress.io/api/commands/select'
		}
	];
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<div class="flex justify-between mt-4 lg:my-auto">
		{#key value1}
			<button
				class="bg-red-400 border-2 border-red-700 w-24 lg:w-48 h-24 mx-4 rounded-full text-lg lg:text-2xl"
				on:click={() => value1--}
				class:bg-green-400={value1 === 0}
				class:border-green-700={value1 === 0}
			>
				<div in:fly={{ y: -20 }}>
					{value1}
				</div>
			</button>
		{/key}
		{#key value2}
			<button
				class="bg-red-400 border-2 border-red-700 w-24 lg:w-48 h-24 mx-4 rounded-full text-2xl"
				on:click={() => value2--}
				class:bg-green-400={value2 === 0}
				class:border-green-700={value2 === 0}
			>
				<div in:fly={{ y: -20 }}>
					{value2}
				</div>
			</button>
		{/key}
	</div>
	<label class="flex flex-col my-10">
		<div class="border- border-slate-600 rounded-full rounded-br-none p-2 	w-40">
			{#if !completed}
				I want a <span id="correctddValue" class="font-bold">{correctDDValue}</span>!
			{:else}
				Thanks!
			{/if}
		</div>
		<select
			bind:value={selectedDDValue}
			class="border-4 border-red-400 mt-2 py-4 mb-6  px-6 rounded-xl rounded-b-full"
			class:border-green-400={selectedDDValue === correctDDValue}
			class:rounded-b-full={selectedDDValue === correctDDValue && value1 === 0 && value2 === 0}
		>
			{#each fisherYatesShuffle(ddValues) as value}
				<option {value}>{value}</option>
			{/each}
		</select>
	</label>
	{#if completed}
		<div class="flex justify-center">
			<CompletedMessage text="Mr. Robot is happy! : ASSERTME" />
		</div>
	{/if}
</ChallengeLayout>
