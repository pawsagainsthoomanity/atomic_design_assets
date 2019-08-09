import React from 'react'
import { createMuiTheme } from '../node_modules/@material-ui/core/styles';

const theme = createMuiTheme({
	overrides: {
		MuiTypography:{
			fontFamily:['Open Sans','sans-serif'].join(','),
			fontSize: 16,
			h1: {
				fontSize: '2rem',
				fontWeight: 400,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
			h2: {
				fontsize: '1.75rem',
				fontWeight: 400,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
			h3: {
				fontSize: '1.75rem',
				fontWeight: 400,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
			h4: {
				fontSize: '1.25rem',
				fontWeight: 400,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
			h5: {
				fontSize: '1rem',
				fontWeight: 600,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
			h6: {
				fontSize: '0.875rem',
				fontWeight: 600,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
			body1: {
				fontSize: '0.875rem',
				fontWeight: 400,
				fontDisplay: 'swap',
				fontStyle: 'normal',
			},
		},
	},
});

export { theme };


