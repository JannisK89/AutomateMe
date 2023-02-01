<script lang="ts">
	import Icon from '@iconify/svelte';
	import arrowCircleRightOutlineRounded from '@iconify/icons-material-symbols/arrow-circle-right-outline-rounded';

	export let header: string;
	export let next: string;
	export let previous: string;
</script>

<div class="flex justify-between border-2 lg:mt-10 border-slate-200 rounded-md items-center ">
	<a href={previous}>
		<Icon
			icon={arrowCircleRightOutlineRounded}
			width="48"
			height="48"
			rotate={2}
			class="border-r-2 border-slate-200 hover:animate-pulse"
		/>
	</a>
	<h1 class="text-xl font-semibold mx-2 ">{header}</h1>
	<a href={next}>
		<Icon
			icon={arrowCircleRightOutlineRounded}
			width="48"
			height="48"
			class="border-l-2 border-slate-200 hover:animate-pulse"
		/>
	</a>
</div>
