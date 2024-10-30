module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				'yellow-shadow': '10px 8px 0px 1px #fdbf0f',
				'blue-shadow': '-37px -33px 0px 0px #3AB8EB;',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
