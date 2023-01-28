<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let showSideMenu: boolean;
</script>

{#if showSideMenu}
	<aside
		transition:fly={{ duration: 400, x: -500, opacity: 0.1 }}
		class="bg-zinc-600 text-white lg:w-3/12
		flex flex-col lg:mr-4 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-auto lg:block inset-0 lg:min-h-screen shadow-inner "
	>
		<div class="m-8 flex flex-col flex-wrap justify-center items-center">
			<h1 class="text-2xl mb-2 font-semibold ">Challenge 1</h1>
			<h2 class="text-lg mb-4">Press the button</h2>
			<p class="mb-4 lg:tracking-wide	font-extralight">
				Let's start with some basics! There is a button there, click it!
			</p>
		</div>
	</aside>
{/if}
