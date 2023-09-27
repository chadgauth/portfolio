/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				sm: '0.800rem',
				base: '1rem',
				xl: '1.250rem',
				'2xl': '1.563rem',
				'3xl': '1.954rem',
				'4xl': '2.442rem',
				'5xl': '3.053rem',
			  },
			  fontFamily: {
				heading: 'Inclusive Sans',
				body: 'Bricolage Grotesque',
			  },
			  fontWeight: {
				normal: '400',
				bold: '700',
			  },
			  colors: {
				'text': {
				  50: 'lch(var(--text-50) / <alpha-value>)',
				  100: 'lch(var(--text-100) / <alpha-value>)',
				  200: 'lch(var(--text-200) / <alpha-value>)',
				  300: 'lch(var(--text-300) / <alpha-value>)',
				  400: 'lch(var(--text-400) / <alpha-value>)',
				  500: 'lch(var(--text-500) / <alpha-value>)',
				  600: 'lch(var(--text-600) / <alpha-value>)',
				  700: 'lch(var(--text-700) / <alpha-value>)',
				  800: 'lch(var(--text-800) / <alpha-value>)',
				  900: 'lch(var(--text-900) / <alpha-value>)',
				  950: 'lch(var(--text-950) / <alpha-value>)',
				},
				'background': {
				  50: 'lch(var(--background-50) / <alpha-value>)',
				  100: 'lch(var(--background-100) / <alpha-value>)',
				  200: 'lch(var(--background-200) / <alpha-value>)',
				  300: 'lch(var(--background-300) / <alpha-value>)',
				  400: 'lch(var(--background-400) / <alpha-value>)',
				  500: 'lch(var(--background-500) / <alpha-value>)',
				  600: 'lch(var(--background-600) / <alpha-value>)',
				  700: 'lch(var(--background-700) / <alpha-value>)',
				  800: 'lch(var(--background-800) / <alpha-value>)',
				  900: 'lch(var(--background-900) / <alpha-value>)',
				  950: 'lch(var(--background-950) / <alpha-value>)',
				},
				'primary': {
				  50: 'lch(var(--primary-50) / <alpha-value>)',
				  100: 'lch(var(--primary-100) / <alpha-value>)',
				  200: 'lch(var(--primary-200) / <alpha-value>)',
				  300: 'lch(var(--primary-300) / <alpha-value>)',
				  400: 'lch(var(--primary-400) / <alpha-value>)',
				  500: 'lch(var(--primary-500) / <alpha-value>)',
				  600: 'lch(var(--primary-600) / <alpha-value>)',
				  700: 'lch(var(--primary-700) / <alpha-value>)',
				  800: 'lch(var(--primary-800) / <alpha-value>)',
				  900: 'lch(var(--primary-900) / <alpha-value>)',
				  950: 'lch(var(--primary-950) / <alpha-value>)',
				},
				'secondary': {
				  50: 'lch(var(--secondary-50) / <alpha-value>)',
				  100: 'lch(var(--secondary-100) / <alpha-value>)',
				  200: 'lch(var(--secondary-200) / <alpha-value>)',
				  300: 'lch(var(--secondary-300) / <alpha-value>)',
				  400: 'lch(var(--secondary-400) / <alpha-value>)',
				  500: 'lch(var(--secondary-500) / <alpha-value>)',
				  600: 'lch(var(--secondary-600) / <alpha-value>)',
				  700: 'lch(var(--secondary-700) / <alpha-value>)',
				  800: 'lch(var(--secondary-800) / <alpha-value>)',
				  900: 'lch(var(--secondary-900) / <alpha-value>)',
				  950: 'lch(var(--secondary-950) / <alpha-value>)',
				},
				'accent': {
				  50: 'lch(var(--accent-50) / <alpha-value>)',
				  100: 'lch(var(--accent-100) / <alpha-value>)',
				  200: 'lch(var(--accent-200) / <alpha-value>)',
				  300: 'lch(var(--accent-300) / <alpha-value>)',
				  400: 'lch(var(--accent-400) / <alpha-value>)',
				  500: 'lch(var(--accent-500) / <alpha-value>)',
				  600: 'lch(var(--accent-600) / <alpha-value>)',
				  700: 'lch(var(--accent-700) / <alpha-value>)',
				  800: 'lch(var(--accent-800) / <alpha-value>)',
				  900: 'lch(var(--accent-900) / <alpha-value>)',
				  950: 'lch(var(--accent-950) / <alpha-value>)',
				},
			   },			   
			removeAlphaValue: (theme) => {
				const colors = theme('colors');
				const updatedColors = {};
		  
				for (const category in colors) {
				  const colorValues = colors[category];
				  const updatedColorValues = {};
		  
				  for (const key in colorValues) {
					const colorValue = colorValues[key];
					const updatedColorValue = colorValue.replace(/ \/ <alpha-value>/g, '');
					updatedColorValues[key] = updatedColorValue;
				  }
		  
				  updatedColors[category] = updatedColorValues;
				}
		  
				return updatedColors;
			  },
			typography: (theme) => ({
				DEFAULT: {
				  css: {
					h2: {
					  color: theme('removeAlphaValue').primary['50'],
					  fontWeight: '700',
					  margin: '2rem 0 .6rem',
					  'font-size': '1.3rem',
					},
					h3: {
						color: theme('removeAlphaValue').accent['100'],
						margin: '1.4rem 0 .2rem',
						'font-size': '1.1rem',
					},
					p: {
						color: theme('removeAlphaValue').text['50'],
						margin: '.6rem 0 1.2rem',
						'line-height': '1.5rem'
					},
					strong: {
						color: theme('removeAlphaValue').accent['100'],
					},
					code: {
						background: theme('removeAlphaValue').background['800'],
						color: theme('removeAlphaValue').primary['400'],
						padding: '.2rem 0',
						margin: '0 .1rem'
					},
					time: {
						color: theme('removeAlphaValue').accent['400']
					},
					marker: {
						color: theme('removeAlphaValue').accent['50'],
					},
					'ul > li': {
						color: theme('removeAlphaValue').primary['50'],
					},
					ul: {
						padding: '0 0 0 1rem',
						color: theme('removeAlphaValue').accent['700'],
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
	plugins: [require("@tailwindcss/typography")]
	// daisyui: {
	// 	themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
	// 	darkTheme: "dark", // name of one of the included themes for dark mode
	// 	logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	//   }
}
