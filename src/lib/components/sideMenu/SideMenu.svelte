<script context="module" lang="ts">
	export type SideMenuData = {
		header: string;
		content: string;
		next: string;
		previous: string;
		difficulty: string;
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { showSideMenu } from '$lib/stores/sideMenu';
	import Tip from './Tip.svelte';
	import type { TipData } from './Tip.svelte';
	import Nav from './Nav.svelte';
	import Difficulty from './Difficulty.svelte';

	export let menuData: SideMenuData;
	export let tips: TipData[];
</script>

{#if $showSideMenu}
	<aside
		transition:fly|local={{ duration: 600, x: -2000, opacity: 0.8, easing: quintOut }}
		class="bg-sky-400/40  lg:w-4/12
		flex flex-col lg:mr-4 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-auto lg:block inset-0 lg:min-h-screen shadow-inner lg:my-16"
	>
		<Nav {...menuData} />
		<div class="m-6 lg:m-10 flex flex-col flex-wrap ">
			<Difficulty difficulty={menuData.difficulty} />
			<div class="mb-4 lg:tracking-wide font-light">
				{@html menuData.content}
			</div>
			{#each tips as tip}
				<Tip tipData={tip} />
			{/each}
		</div>
	</aside>
{/if}
