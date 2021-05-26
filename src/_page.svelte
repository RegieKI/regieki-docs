<script>
	import { html } from './store.js'
	import { page } from '$app/stores'


	$: path = $page.path.substring(1)
	$: key = path == '' ? 'regieki-docs' : path

</script>

<article class="flex column grow rel ptb1 maxw46em">
	<div class="cmb1">
		<a 
			class="button abs r0 color-a filled radius2em unclickable"
			href={`https://github.com/regieki/${path}`}>
			view
		</a>
		{@html $html[key]}
	</div>
	<div class="ptb1">
		<a class="mtb2 maxw16em flex block unclickable" href="https://www.dhaus.de"><img class="w100pc" src="/dhaus.svg" /></a>
		<!-- {(new Date()).getFullYear()} -->
		<!-- MIT / Creative Commons -->
	</div>
</article>