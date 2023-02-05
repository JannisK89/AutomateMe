<script lang="ts">
	export let itemDragList: string[];

	const dragStartHandler = (
		e: DragEvent & {
			currentTarget: EventTarget & HTMLLIElement;
		}
	) => {
		e.dataTransfer?.setData('text/plain', e.currentTarget.innerText);
	};
</script>

<ul class="bg-slate-50 border p-2 rounded-xl flex flex-wrap min-w-full min-h-[4rem] justify-center">
	{#each itemDragList as item}
		<li class="m-1 border p-2" draggable="true" on:dragstart={(e) => dragStartHandler(e)}>
			{item}
		</li>
	{/each}
</ul>
