module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				'primary-shadow': '10px 8px 0px 1px var(--tertiary-color)',
				'secondary-shadow':
					'-37px -33px 0px 0px var(--secondary-color)',
			},
			fontFamily: {
				syne: ['Syne', 'sans-serif'],
			},
			colors: {
				primary: 'var(--tertiary-color)',
				secondary: 'var(--secondary-color)',
				'primary-text': '#3B3F5C',
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
