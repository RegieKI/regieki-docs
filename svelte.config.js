/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelt
		ssr: true,
		router: false
	}
};

export default config;
