
<script context="module">
	export const load = async ({ fetch, page }) => {
		return { props: { data: await (await fetch('/data.json')).json() } }
	}
</script>
<script>
	import { browser, dev } from '$app/env'
	import { onMount } from 'svelte'
	import { html } from './../store.js'
	import { page } from '$app/stores'


	export let data

	html.set( data )

	$: path = $page.path.substring(1)

	const linkz = [
		'regieki-docs',
		'pdac-backend',
		'pdac-frontend',
		'pdac',
		'pdac-specification',
		'regie-core-production',
		'regieki-av',
		'regieki-controller'
	]

	let active = false


</script>

<svelte:head>
	<meta name="author" content="Gilbert Sinnott, Meredith Thomas, Helin Ulas">
	<meta name="description" content="Regie: KI, Eine Produktion der Digitalen Bürgerbühne — Künstlerische Leitung: Martin Grünheit — Premiere im Schauspielhaus, Kleines Haus, Regie: KI, Besetzung: : Mit Angela Cramer-Laschke, Alev Engel, Lara Kebeck, Tilmann Krämer, Jonas Prokopf, Jasmin Schlick, Begüm Sengül, Denise Thoma, Regie: KI, Künstlerische Leitung: Martin Grünheit, Dramaturgie/Kybernetik: Michael Straeubig, Bühne: Lea Kissing, Kostüm: Imke Paulick, Musikalische Leitung/Komposition: Frieder Hepting, Programmierung: Meredith Thomas, Helin Ulas, Gilbert Sinnott, Audiovisuelles Design: Helin Ulas, Regieassistenz: Auguste Sandner, Bühnenbildassistenz: Susanne Hoffmann">
	<meta name="theme-color" content="#FF3A51" />
</svelte:head>


<div class="sassis flex row-center-start w100vw margin-auto" id="layout">
	<div class="w100pc plr1 pt1"  id="menu">
		<button 
			on:click={e => active = !active}
			class="text-center block w100pc radius2em">menu</button>
	</div>
	<nav 
		class:active={active}
		class="bg flex column-stretch-space-between minw14em z-index99 t0 l0" id="nav">
		<div class="flex column p1">
			<!-- <h1>RegieKI</h1> -->
			{#each linkz as name}
				<a 
					on:click={e => active = false}
					class:filled={path == name || path == '' && name == 'regieki-docs'}
					class="unclickable p0-5 mtb0-5 flex" 
					href={'/'+name}>
					{name}
				</a>
			{/each}
			<a 
				on:click={e => active = false}
				class="button mt1 radius2em"
				href="https://github.com/regieki">
				github
			</a>
		</div>
		<!-- <div class="p1 cmb1 sticky t0 l0">
			<p>
				<a href="https://github.com/RegieKI/pdac/blob/main/LICENSE-MIT.md">MIT</a>
			</p>
			<p>
				<a href="https://github.com/RegieKI/pdac/blob/main/LICENSE-CC.md">CC BY-NC-SA 4.0</a>
			</p>

		</div> -->
	</nav>

	<slot />
</div>