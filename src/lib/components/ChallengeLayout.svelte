<script>
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade
	class="lg:max-w-3xl lg:mx-auto lg:my-10 m-6 flex flex-col min-h-[calc(100vh-9.5rem)] lg:bg-zinc-100 lg:py-12 lg:px-20 lg:rounded-2xl lg:border lg:shadow-md"
>
	<slot />
</div>
