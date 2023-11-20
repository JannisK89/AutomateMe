<script lang="ts">
	export let onClick: () => void = () => {};
	export let type: 'button' | 'submit' = 'button';
	export let text: string = '';
</script>

<button
	{type}
	on:click={onClick}
	class="pt-2 pb-4 px-12 mt-4 mb-4 rounded-xl bg-sky-500 hover:bg-sky-500/80 text-3xl font-semibold lg:w-80"
	>{text}</button
>
