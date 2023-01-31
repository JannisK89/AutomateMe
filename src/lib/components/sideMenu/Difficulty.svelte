<script lang="ts">
	const colors = new Map<string, string>();
	colors.set('Easy', 'text-green-600');
	colors.set('Medium', 'text-yellow-600');
	colors.set('Hard', 'text-red-600');

	export let difficulty: string;
</script>

{#if difficulty !== ''}
	<div class="my-2">
		Difficulty:
		<span class="font-semibold  {colors.get(difficulty) ?? 'text-black'}">
			{difficulty}
		</span>
	</div>
{/if}
