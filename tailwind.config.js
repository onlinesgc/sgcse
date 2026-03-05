/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,ts,js}'], // scan all your Svelte files
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
