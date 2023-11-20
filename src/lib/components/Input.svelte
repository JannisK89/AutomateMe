<script lang="ts">
	export let label: string;
	export let placeholder: string | undefined = undefined;
	export let type: 'text' | 'number' | 'password' = 'text';
	export let value: string;
	export let disabled: boolean = false;

	const inputCss = 'border-2 p-2 mt-2 lg:w-80';
</script>

<label class="flex flex-col mt-6  mb-4 font-medium">
	{label}
	{#if type === 'text'}
		<input bind:value {placeholder} {disabled} type="text" class={inputCss} />
	{:else if type === 'number'}
		<input bind:value {placeholder} type="number" class={inputCss} />
	{:else if type === 'password'}
		<input bind:value {placeholder} type="password" class={inputCss} />
	{/if}
</label>
