<script lang="ts">
	export let updateDragList: Function;
	export let itemDropList: string[];

	const dropHandler = (
		e: DragEvent & {
			currentTarget: EventTarget & HTMLUListElement;
		}
	) => {
		if (e.dataTransfer !== null) {
			const transferItem = e.dataTransfer.getData('text/plain');
			itemDropList.push(transferItem);
			itemDropList = itemDropList;

			updateDragList(transferItem);
		}
	};

	const dragOverHandler = (e: DragEvent) => {
		if (e.dataTransfer !== null) {
			e.dataTransfer.dropEffect = 'move';
		}
	};
</script>

<ul
	class="bg-slate-50 mb-6  border p-2 rounded-xl flex flex-wrap min-w-full lg:min-w-[100vh] min-h-[4rem] justify-center"
	on:drop|preventDefault={(e) => dropHandler(e)}
	on:dragover|preventDefault={(e) => dragOverHandler(e)}
>
	{#each itemDropList as item}
		<li class="m-1 border p-2 select-none">{item}</li>
	{/each}
</ul>
