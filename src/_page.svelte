<script>
	import { html } from './store.js'
	import { page } from '$app/stores'


	$: path = $page.path.substring(1)
	$: key = path == '' ? 'regieki-docs' : path

</script>

<article class="flex column cmb1 grow rel">
	<a 
		class="button abs r0"
		href={`https://github.com/regieki/${path}`}>
		view
	</a>
	{@html $html[key]} {key}
</article>