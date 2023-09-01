/** @type {import('tailwindcss').Config}*/
const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		'.backface-visible': {
			'backface-visibility': 'visible',
			'-moz-backface-visibility': 'visible',
			'-webkit-backface-visibility': 'visible',
			'-ms-backface-visibility': 'visible'
		},
		'.backface-hidden': {
			'backface-visibility': 'hidden',
			'-moz-backface-visibility': 'hidden',
			'-webkit-backface-visibility': 'hidden',
			'-ms-backface-visibility': 'hidden'
		}
	});
});


const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui'), backfaceVisibility],

	daisyui: {
		themes: ['cupcake', 'forest']
	}
};

module.exports = config;
