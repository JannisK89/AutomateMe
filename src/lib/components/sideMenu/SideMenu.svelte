<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { showSideMenu } from '$lib/stores/sideMenu';

	type SideMenuData = {
		header: string;
		subHeader: string;
		content: string;
	};

	export let menuData: SideMenuData;
</script>

{#if $showSideMenu}
	<aside
		transition:fly={{ duration: 500, x: -500, opacity: 0.8, easing: quintOut }}
		class="bg-zinc-600 text-white lg:w-3/12
		flex flex-col lg:mr-4 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-auto lg:block inset-0 lg:min-h-screen shadow-inner "
	>
		<div class="m-8 flex flex-col flex-wrap justify-center items-center">
			<h1 class="text-2xl mb-2 font-semibold ">{menuData.header}</h1>
			<div class="text-lg mb-4">{menuData.subHeader}</div>
			<p class="mb-4 lg:tracking-wide	font-extralight">
				{@html menuData.content}
			</p>
		</div>
	</aside>
{/if}
