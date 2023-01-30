<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<div class="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row min-w-full">
	<slot />
</div>
