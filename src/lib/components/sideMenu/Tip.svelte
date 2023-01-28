<script context="module" lang="ts">
	export type TipData = {
		title: string;
		content: string;
		link: string | null;
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	export let tipData: TipData;
</script>

<details class="bg-pink-400/70 p-4 my-4 rounded">
	<summary class=""> {tipData.title}</summary>
	<p class="font-mono text-xs my-4">{@html tipData.content}</p>
</details>
