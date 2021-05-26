
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
	<meta name="author" content="Gilbert Sinnott">
	<meta name="description" content="Gilbert Sinnott">
	<meta name="theme-color" content="hsl( 200, 10%, 10% )" />
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