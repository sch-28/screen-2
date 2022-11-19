const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {},
		textColor: {
			white: 'rgba(255, 255, 255, 0.87)',
			dark: 'rgba(0, 0, 0, 0.87)'
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'media'
};

module.exports = config;
