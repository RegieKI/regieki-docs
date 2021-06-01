import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */

const NOROUTER = true
const config = {
	kit: {
		// hydrate the <div id="svelt
		adapter: adapter(),
		ssr: true,
		files: {
			assets: 'static'
		},
		prerender: {
			crawl: true
		},
		router: process.env.NODE_ENV == 'development' && NOROUTER ? false : true
	}
};

export default config