<script lang="ts">
	export let name: string;
	export let age: number;
</script>

<tr class="flex flex-col">
	<div class="flex ">
		<p class="border border-slate-300 p-4 min-w-[10rem] max-w-[10rem] flex justify-center">{name}</p>
		<p class="border border-slate-300 p-4 min-w-[3rem] max-w-[3rem] flex justify-center">{age}</p>
	</div>
</tr>
