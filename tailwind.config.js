export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#09090b',
				primary: '#dadbdb',
				secondary: '#8B949C',
				darkgray: '#1D1D1D',
				greeny: '#00FF00'
			},
			screens: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			},
			fontFamily: {
				gluten: ['Gluten', 'cursive']
			}
		}
	},
	plugins: []
}
