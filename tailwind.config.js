module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				'047': '47%',
				'070': '70%'
			},
			height: {
				500: '500px',
			},
			colors: {
				'calc-gray': '#FAFBFC',
				'calc-gray-200': '#8A94A6',
				'calc-blue': '#377DFF',
				'calc-blue-100': '#E9F0FF',
				'calc-black': '#323B4B',
				'calc-yellow': '#FFEA8A',
				'calc-red': '#E35229',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};