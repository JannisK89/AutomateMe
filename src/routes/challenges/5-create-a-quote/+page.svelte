<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import type { SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import CompletedMessage from '$lib/components/CompletedMessage.svelte';
	import DraggableList from '$lib/components/DraggableList.svelte';
	import DroppableList from '$lib/components/DroppableList.svelte';
	import { fisherYatesShuffle, randomNumber } from '$lib/utils/random';
	import { fade } from 'svelte/transition';

	let completed = false;
	const menuData: SideMenuData = {
		header: '5. Create a quote',
		content:
			'<p>Like the title suggest, we need to put together words to create the needed quote, so drag and drop words in order to create it. <strong>Keep in mind that the quote is not always the same!</strong></p>',
		next: '',
		previous: '/challenges/4-bad-data',
		difficulty: 'Hard'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tip',
			content: 'Try using .dragTo()',
			link: 'https://playwright.dev/docs/input#drag-and-drop'
		},
		{
			title: 'Cypress Tip',
			content: 'Try using .trigger()',
			link: 'https://docs.cypress.io/api/commands/trigger'
		},
		{
			title: 'Cypress Tip',
			content: 'Cypress also has a plug-in for drag and drop',
			link: 'https://github.com/4teamwork/cypress-drag-drop'
		}
	];

	const quotes = [
		'Whatever you are be a good one. - Abraham Lincoln',
		'Be yourself; everyone else is already taken. - Oscar Wilde',
		'Act as if what you do makes a difference. It does. - William James',
		'The only real mistake is the one from which we learn nothing. - Henry Ford',
		'Positive anything is better than negative nothing. - Elbert Hubbard',
		'Limit your ‘always’ and your ‘nevers’. - Amy Poehler​​',
		'Creativity is intelligence having fun. - Albert Einstein',
		'If you tell the truth you don’t have to remember anything. - Mark Twain',
		'Be so good they can’t ignore you. - Steve Martin',
		'There is no substitute for hard work. - Thomas Edison'
	];
	let itemDropList: string[] = [];
	const correctQuote = quotes[randomNumber(quotes.length - 1)];
	let itemDragList = fisherYatesShuffle(correctQuote.split(' '));

	const updateDragList = (transferItem: string) => {
		const index = itemDragList.findIndex((item) => item === transferItem);
		itemDragList = itemDragList.filter((_, i) => {
			return i !== index;
		});
	};

	$: if (itemDragList.length === 0) {
		const createdQuote = itemDropList.toString().replaceAll(',', ' ');

		if (createdQuote === correctQuote) {
			completed = true;
		}
	}
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<div class="flex flex-col items-center lg:min-h-[13rem] lg:min-w-[21rem]">
		<h2 class="text-xl font-semibold mb-2 select-none ">Correct quote</h2>
		<q class="text-lg italic mb-8 select-none">{correctQuote}</q>
		<h3 class="text-xl mb-4 select-none">Drag from here</h3>
		<DraggableList {itemDragList} />

		<h3 class="text-xl mt-20 mb-4 select-none">Release here</h3>
		<DroppableList {itemDropList} {updateDragList} />

		{#if completed}
			<CompletedMessage text="That is correct! : ASSERTME" />
		{:else if !completed && itemDragList.length === 0}
			<p transition:fade class="text-red-600 ">The words are not in the correct order.</p>
		{/if}
	</div>
</ChallengeLayout>
