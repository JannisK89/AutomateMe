<script lang="ts">
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';
	import SideMenu from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';

	const menuData = {
		header: '1. Press the button',
		content: 'Its pretty simple, just press the button'
	};

	const tips: TipData[] = [
		{
			title: 'Playwright Tips',
			content:
				'<a href="https://playwright.dev/docs/api/class-locator#locator-click"> Locator-click </a>'
		}
	];
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<h1>Just press the damn button!</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem ante. Nulla facilisi. In
		bibendum feugiat purus, non lacinia massa dapibus id. Aliquam erat volutpat. Suspendisse sem
		enim, vestibulum eget tortor id, maximus accumsan felis. Pellentesque viverra, tortor vel
		venenatis malesuada, mi ante ultricies magna, vitae faucibus turpis ex sed elit. Aenean in dolor
		in nisl hendrerit tincidunt. Curabitur vestibulum erat lacus, non laoreet justo viverra auctor.
		Suspendisse ac maximus enim. Nunc metus massa, pretium a eleifend quis, ultricies tincidunt
		felis. Donec elementum porttitor convallis. Phasellus suscipit urna et ullamcorper interdum.
		Quisque eget felis sit amet urna bibendum fermentum. Duis auctor tortor sapien, ac volutpat
		risus gravida quis. Nulla facilisi. Cras neque mi, bibendum at varius malesuada, ornare quis
		nulla. In ullamcorper sollicitudin augue non sagittis. Class aptent taciti sociosqu ad litora
		torquent per conubia nostra, per inceptos himenaeos. Proin laoreet nunc sit amet sollicitudin
		tincidunt. Donec vel lectus faucibus, tempor leo id, tempus turpis. Cras egestas consectetur
		sollicitudin. Vivamus convallis ac leo eu eleifend. Pellentesque mollis consequat lorem eget
		malesuada. Vestibulum elementum euismod turpis non posuere. Nullam sit amet gravida velit, nec
		dictum ligula. Nullam dapibus vulputate fringilla. Curabitur dictum lacus et enim tempor, et
		mollis lectus dictum. Integer efficitur diam urna, at rhoncus felis iaculis quis. Etiam
		venenatis neque eu sapien dapibus, id dapibus metus fermentum. Vivamus at nibh magna. Integer ut
		volutpat justo. Etiam luctus, ex a consequat tempor, augue nisl consequat odio, nec iaculis ante
		neque id leo. Cras mollis nunc eu lorem tincidunt, eget aliquet arcu efficitur. Donec porta
		lorem id sagittis vehicula. Integer pellentesque urna nec bibendum rhoncus. Aliquam auctor
		fringilla convallis. Integer rutrum nisl eu vulputate egestas. Praesent vel volutpat sapien,
		eleifend tristique ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
		cubilia curae; Curabitur vestibulum velit eu varius porttitor. Integer ac sapien vel nulla
		maximus cursus ut nec sem. Etiam sodales gravida ante, a mattis erat. Aliquam ante nibh, egestas
		vitae laoreet eu, dignissim sodales arcu. Proin ac ligula malesuada, congue turpis in, imperdiet
		ante. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in
		faucibus. Fusce tempor vel felis vel tristique. Praesent scelerisque risus sit amet felis
		hendrerit vehicula. Fusce dapibus id leo varius faucibus. Nunc et tincidunt nunc, vel
		ullamcorper odio. Sed et est tortor. Praesent consequat mi nulla, vel pulvinar lacus porta ac.
		Nunc sit amet semper ex. Nulla mattis quis urna et pellentesque. Quisque non metus consequat,
		molestie dolor sed, condimentum urna. Pellentesque vitae augue non nisi vestibulum mattis eu vel
		erat. Integer condimentum, tortor quis ultrices hendrerit, lacus dolor pulvinar mauris, nec
		cursus metus tortor ut enim. Integer ac tristique dui.
	</p>
</ChallengeLayout>
