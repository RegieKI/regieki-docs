
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


</script>

<svelte:head>
	<meta name="author" content="Gilbert Sinnott, Meredith Thomas, Helin Ulas">
	<meta name="description" content="Regie: KI, Eine Produktion der Digitalen Bürgerbühne — Künstlerische Leitung: Martin Grünheit — Premiere im Schauspielhaus, Kleines Haus, Regie: KI, Besetzung: : Mit Angela Cramer-Laschke, Alev Engel, Lara Kebeck, Tilmann Krämer, Jonas Prokopf, Jasmin Schlick, Begüm Sengül, Denise Thoma, Regie: KI, Künstlerische Leitung: Martin Grünheit, Dramaturgie/Kybernetik: Michael Straeubig, Bühne: Lea Kissing, Kostüm: Imke Paulick, Musikalische Leitung/Komposition: Frieder Hepting, Programmierung: Meredith Thomas, Helin Ulas, Gilbert Sinnott, Audiovisuelles Design: Helin Ulas, Regieassistenz: Auguste Sandner, Bühnenbildassistenz: Susanne Hoffmann">
	<meta name="theme-color" content="#FF3A51" />
</svelte:head>


<div class="sassis flex row-center-start w100vw margin-auto">
	<nav class="flex column-flex-start-space-between minw16em h100vh">
		<div class="flex column p1">
			<!-- <h1>RegieKI</h1> -->
			{#each Object.keys($html).reverse() as name}
				<a 
					class:filled={path == name || path == '' && name == 'regieki-docs'}
					class="unclickable p0-1 plr0-5 mt1 flex" 
					href={'/'+name}>
					{name}
				</a>
			{/each}
			<a 
				class="button mtb2"
				href="https://github.com/regieki">
				github
			</a>
		</div>
	</nav>

	<slot />
</div>