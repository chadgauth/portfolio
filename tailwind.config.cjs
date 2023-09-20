/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Public Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
				'serif': ['"Sarabun"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
			  },
			colors: {
				blue: {
					DEFAULT: "hsl(189, 8%, 42%)",
					200: "hsl(189, 12%, 82%)",
					400: "hsl(189, 5%, 58%)",
					500: "hsl(189, 12%, 50%)",
					700: "hsl(189, 12%, 30%)",
					900: "hsl(189, 44%, 13%)",
				},
				cyan: {
					DEFAULT: "hsl(177, 13%, 66%)",
				},
				green: {
					DEFAULT: "hsl(170, 20%, 26%)",
					50: "hsl(170, 80%, 95%)",
					100: "hsl(170, 70%, 90%)",
					200: "hsl(170, 63%, 70%)",
					300: "hsl(170, 54%, 60%)",
					400: "hsl(170, 52%, 50%)",
					500: "hsl(170, 50%, 40%)",
					600: "hsl(176, 39%, 30%)",
					700: "hsl(170, 20%, 30%)",
					800: "hsl(170, 20%, 20%)",
					900: "hsl(170, 20%, 10%)"
				},
				brown: {
					DEFAULT: "hsl(20, 20%, 26%)",
					50: "hsl(20, 20%, 90%)",
					100: "hsl(20, 20%, 80%)",
					200: "hsl(20, 20%, 70%)",
					300: "hsl(20, 18%, 60%)",
					400: "hsl(20, 16%, 50%)",
					500: "hsl(20, 15%, 40%)",
					600: "hsl(20, 13%, 30%)",
					700: "hsl(20, 11%, 20%)",
					800: "hsl(20, 9%, 10%)",
					900: "hsl(20, 7%, 0%)"
				},
				orange: {
					DEFAULT: "hsl(12, 89%, 63%)",
					50: "hsl(12, 89%, 93%)",
					100: "hsl(12, 89%, 83%)",
					200: "hsl(12, 89%, 73%)",
					300: "hsl(12, 89%, 63%)",
					400: "hsl(12, 89%, 53%)",
					500: "hsl(12, 89%, 43%)",
					600: "hsl(12, 89%, 33%)",
					700: "hsl(12, 89%, 23%)",
					800: "hsl(12, 89%, 13%)",
					900: "hsl(12, 89%, 3%)"
				},
				yellow: {
					DEFAULT: "hsl(38, 79%, 52%)",
					50: "hsl(38, 79%, 92%)",
					100: "hsl(38, 79%, 82%)",
					200: "hsl(38, 79%, 72%)",
					300: "hsl(38, 79%, 62%)",
					400: "hsl(38, 79%, 52%)",
					500: "hsl(38, 79%, 42%)",
					600: "hsl(38, 79%, 32%)",
					700: "hsl(38, 79%, 22%)",
					800: "hsl(38, 79%, 12%)",
					900: "hsl(38, 79%, 2%)"
				},
				"grey": {
					DEFAULT: "hsl(70, 4%, 29%)",
					50: "hsl(70, 4%, 89%)",
					100: "hsl(70, 4%, 79%)",
					200: "hsl(70, 4%, 69%)",
					300: "hsl(70, 4%, 59%)",
					400: "hsl(70, 4%, 49%)",
					500: "hsl(70, 4%, 39%)",
					600: "hsl(70, 4%, 29%)",
					700: "hsl(70, 4%, 19%)",
					800: "hsl(70, 4%, 9%)",
					900: "hsl(70, 4%, 4%)"
				}
			},
			typography: (theme) => ({
				DEFAULT: {
				  css: {
					h2: {
					  color: theme('colors.grey.50'),
					  fontWeight: '700',
					  margin: '2rem 0 .6rem',
					  'font-size': '1.3rem',
					},
					h3: {
						color: theme('colors.orange.100'),
						margin: '1.4rem 0 .2rem',
						'font-size': '1.1rem',
					},
					p: {
						color: theme('colors.grey.50'),
						margin: '.6rem 0 1.2rem',
						'line-height': '1.5rem'
					},
					strong: {
						color: theme('colors.green.100'),
					},
					code: {
						background: theme('colors.grey.800'),
						color: theme('colors.yellow.400'),
						padding: '.2rem 0',
						margin: '0 .1rem'
					},
					time: {
						color: theme('colors.yellow.400')
					},
					marker: {
						color: theme('colors.green.50'),
					},
					'ul > li': {
						color: theme('colors.grey.50'),
					},
					ul: {
						padding: '0 0 0 1rem',
						color: theme('colors.green.700'),
					},
					'.github-dark': {
						'background-color': 'hsl(60, 3%, 15%) !important',
        				border: '.3rem solid hsl(29, 26%, 42%)',
        				'border-radius': '.75rem',
						'margin-bottom': '2rem'
					}
				  },
				},
			  }),
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
