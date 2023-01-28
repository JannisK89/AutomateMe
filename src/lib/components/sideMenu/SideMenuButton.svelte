<script lang="ts">
	import { showSideMenu } from '$lib/stores/sideMenu';

	const sideMenuToggle = () => showSideMenu.set(!$showSideMenu);
</script>

<button
	on:click={sideMenuToggle}
	class="lg:left-[25%]  border-2 border-black bg-slate-800 text-slate-100 rounded-r-lg"
	class:lg:sticky={$showSideMenu}>{$showSideMenu ? '<	' : '>'}</button
>
<div
	class="flex flex-col items-center lg:pl-[25%]  mx-8 lg:mx-20 my-8 "
	class:lg:pl-[25%]={$showSideMenu}
/>
