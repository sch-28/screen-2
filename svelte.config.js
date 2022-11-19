import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/screen-2'
		}
	}
};

export default config;
