<script context="module" lang="ts">
	export type TipData = {
		title: string;
		content: string;
		link: string | null;
	};
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';

	export let tipData: TipData;
	let toggled: boolean = false;

	const toggleTip = () => (toggled = true);
</script>

<button
	on:click={toggleTip}
	class="bg-pink-400/70 p-4 mt-4 rounded-xl"
	class:cursor-default={toggled}
>
	{#if toggled && tipData.link !== null}
		<a
			transition:fade
			href={tipData.link}
			target="_blank"
			rel="noreferrer"
			class="font-semibold underline"
		>
			<span>{tipData.content}</span>
		</a>
	{:else if toggled}
		<span>{tipData.content}</span>
	{:else}
		<h2>{tipData.title}</h2>
	{/if}
</button>
