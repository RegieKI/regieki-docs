
<script context="module">
	export const load = async ({ fetch, page }) => {
		return { props: { data: await (await fetch('/data.json')).json() } }
	}
</script>
<script>
	import { browser, dev } from '$app/env'
	import { onMount } from 'svelte'
	import { html } from './../store.js'


	export let data

	html.set( data )
	// $html = data


</script>

<svelte:head>
	<meta name="author" content="Gilbert Sinnott">
	<meta name="description" content="Gilbert Sinnott">
	<meta name="theme-color" content="hsl( 200, 10%, 10% )" />
</svelte:head>


<div class="sassis flex row p1 maxw62em margin-auto">
	<nav class="flex column-flex-start-start minw12em cmb1">
		{#each Object.keys($html) as name}
			<a class="unclickable" href={'/'+name}>
				{name}
			</a>
		{/each}
	</nav>

	<slot />
</div>