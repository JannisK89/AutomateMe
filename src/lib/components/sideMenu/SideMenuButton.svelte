<script lang="ts">
	import { showSideMenu } from '$lib/stores/sideMenu';

	const sideMenuToggle = () => showSideMenu.set(!$showSideMenu);
</script>

<button
	on:click={sideMenuToggle}
	class="lg:fixed border-2 border-sky-600/30 bg-sky-600/50 text-slate-100 rounded-r-lg hidden lg:block  h-[calc(100vh-4.2rem)]"
	class:lg:left-[33.333%]={$showSideMenu}>{$showSideMenu ? '<	' : '>'}</button
>

<div class:lg:pl-[33%]={$showSideMenu} />
