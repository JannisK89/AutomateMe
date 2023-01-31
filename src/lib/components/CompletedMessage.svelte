<script>
	import { fade } from 'svelte/transition';

	export let text = 'ASSERTME';
</script>

<div in:fade|local class="text-green-600 text-lg">
	{text}
</div>
