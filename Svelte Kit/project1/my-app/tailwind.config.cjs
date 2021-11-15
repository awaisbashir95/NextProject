const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		      require('daisyui'),
	],
	daisyui: {
		styled: true,
		themes: false,
		rtl: false,
	  },
};

module.exports = config;
