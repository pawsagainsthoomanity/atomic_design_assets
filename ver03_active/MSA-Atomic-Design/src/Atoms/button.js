import React from 'react';
import { withStyles, createStyles } from '../node_modules/@material-ui/core/styles';
import Button from '../node_modules/@material-ui/core/Button';

const PrimaryButton = withStyles({
	root: {
		background: '#005481',
		borderRaidus: 0,
		border: 0,
		color: 'white',
		height: 32,
		padding: '0 16px',
		boxShaddow: '0 3px 5px 2px rgba(255, 105, 135, 0)',
		'&$disabled': {
        	background: "#D6DADC",
        	color: "white",
        },
	},

	label: {
		textTransform: 'capitalize',
	},

})(Button);

export { PrimaryButton };



