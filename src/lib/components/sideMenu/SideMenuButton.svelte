<script lang="ts">
	import { showSideMenu } from '$lib/stores/sideMenu';

	const sideMenuToggle = () => showSideMenu.set(!$showSideMenu);
</script>

<button
	on:click={sideMenuToggle}
	class="lg:left-1/3 border-2 border-sky-600/30 bg-sky-600/50 text-slate-100 rounded-r-lg hidden lg:block h-screen "
	class:lg:fixed={$showSideMenu}>{$showSideMenu ? '<	' : '>'}</button
>

<div
	class="flex flex-col items-center lg:pl-[20%]  mx-8 lg:mx-20 my-8 "
	class:lg:pl-[20%]={$showSideMenu}
/>
