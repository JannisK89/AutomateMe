<script lang="ts">
	import SideMenu, { type SideMenuData } from '$lib/components/sideMenu/SideMenu.svelte';
	import SideMenuButton from '$lib/components/sideMenu/SideMenuButton.svelte';
	import type { TipData } from '$lib/components/sideMenu/Tip.svelte';
	import ChallengeLayout from '$lib/components/ChallengeLayout.svelte';

	const menuData: SideMenuData = {
		header: '0. Welcome to Daedalus!',
		content: "<p> Don't forget to use your favorite test frameworks documentation as help!<p/>"
	};

	const tips: TipData[] = [
		{
			title: 'Getting Started with Playwright',
			content: 'Playwright.dev',
			link: 'https://playwright.dev/docs/intro'
		},
		{
			title: 'Getting Started with Cypress',
			content: 'Cypress.io',
			link: 'https://docs.cypress.io/guides/getting-started/installing-cypress'
		}
	];
</script>

<SideMenu {menuData} {tips} />
<SideMenuButton />

<ChallengeLayout>
	<h2 class="text-xl font-semibold mb-2">What is Daedalus?</h2>
	<p class="mb-2">
		Daedalus is a <a
			href="https://github.com/JannisK89/AutomateMe"
			target="_blank"
			rel="noreferrer"
			class="underline"
			>open source project
		</a>for developers and test engineers to practice writing web/test automation in a safe and fun
		environment by completing different challenges that get harder and harder as you progress.
	</p>
	<p>
		The idea is to use your favorite web/test automation framework documentation as a manual for
		figuring out how to pass the different challenges. There are no limits to how much you can
		automate and no blockers for automated browsers, so fly as close to the sun as you please young
		Icarus!
	</p>

	<h2 class="text-xl font-semibold mt-6 mb-2">How does it work?</h2>
	<p>
		It's pretty simple! To your left side (on top if you are on small screens) is a menu that tells
		you what you need to do for each challenge. When you manage to do what it tells you, you will
		get a code that says <strong>"ASSERTME"</strong> that will let you know you completed the level.
		To navigate between challenges, simply use the back and forward arrows on the side menu although
		we recommend that you open each challenge in your tests using the corresponding URL.
	</p>
	<p class="mt-2">
		We also highly recommend that you put each challenge in a separate test and add an assertion for
		the text <strong>"ASSERTME"</strong> at the end of each test. That way when the test goes green you
		know that you completed the challenge and can move on to the next one.
	</p>

	<h3 class=" font-semibold mt-4 mb-2">Playwright (using Javascript)</h3>
	<code class="bg-black text-orange-400 text-sm p-2 px-4 rounded-t">
		const assertion = page.getByText('ASSERTME')
	</code>
	<code class="bg-black text-orange-400 text-sm p-2 px-4 rounded-b">
		expect(assertion).toBeVisible()
	</code>
	<h3 class=" font-semibold mt-4 mb-2">Cypress</h3>
	<code class="bg-black text-orange-400 text-sm p-4 rounded"> cy.contains('ASSERTME') </code>

	<h2 class="text-xl font-semibold mt-6 mb-2">Are there tutorials included?</h2>
	<p>
		For now no, all you get on each challenge is tips for how to solve the challenge that link to
		the official documentation of the test tools, but it is something we have in mind for the
		future.
	</p>

	<h2 class="text-xl font-semibold mt-6 mb-2">Can I only use Playwright or Cypress?</h2>
	<p>
		No, you are allowed to use any tool you want but the challenges and tips for each challenge are
		created using Playwright or Cypress in mind.
	</p>
</ChallengeLayout>
