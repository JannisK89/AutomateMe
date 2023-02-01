<script lang="ts">
	import { showSideMenu } from '$lib/stores/sideMenu';

	const sideMenuToggle = () => showSideMenu.set(!$showSideMenu);
</script>

<button
	on:click={sideMenuToggle}
	class="lg:fixed border-2 border-gray-300 text-black bg-gray-200 rounded-r-lg hidden lg:block  h-[calc(100vh-4.2rem)]"
	class:lg:left-[33.333%]={$showSideMenu}>{$showSideMenu ? '<	' : '>'}</button
>

<div class:lg:pl-[33%]={$showSideMenu} />
