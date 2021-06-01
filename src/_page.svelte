<script>
	import { html } from './store.js'
	import { page } from '$app/stores'


	$: path = $page.path.substring(1)
	$: key = path == '' ? 'regieki-docs' : path

</script>

<article 
	id="page"
	class="flex column-flex-start-space-between grow rel p1 maxw48em minh100vh">
	<div class="cmb1">
		<a 
			id="linky"
			class="button abs r0 color-a filled radius2em unclickable"
			href={`https://github.com/regieki/${path}`}>
			view
		</a>
		{@html $html[key]}
	</div>
	<div class="ptb1">
		<a class="mtb2 maxw16em flex block unclickable" href="https://www.dhaus.de">
			<img class="w100pc" src="/dhaus.svg" />
		</a>
		2020-{(new Date()).getFullYear()}
		<a class="" href="https://www.dhaus.de">
			Düsseldorfer Schauspielhaus
		</a>
		<!-- MIT / Creative Commons -->
	</div>
</article>