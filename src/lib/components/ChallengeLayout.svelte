<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade class="lg:max-w-2xl lg:mx-auto lg:my-10 m-6 flex flex-col">
	<slot />
</div>
