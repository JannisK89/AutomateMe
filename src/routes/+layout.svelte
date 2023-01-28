<script lang="ts">
	import SideMenu from '$lib/components/SideMenu.svelte';
	import '../app.css';

	let showSideMenu = true;

	const sideMenuToggle = () => (showSideMenu = !showSideMenu);
</script>

<div class="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row min-w-full bg-slate-50 min-h-screen">
	<SideMenu {showSideMenu} />
	<button
		on:click={sideMenuToggle}
		class="lg:left-[25%]  border-2 border-black bg-slate-800 text-slate-100 rounded-r-lg"
		class:lg:sticky={showSideMenu}>{showSideMenu ? '<	' : '>'}</button
	>
	<div
		class="flex flex-col items-center lg:pl-[25%]  mx-8 lg:mx-20 my-8 "
		class:lg:pl-[25%]={showSideMenu}
	>
		<slot />
	</div>
</div>
