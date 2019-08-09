import ReactDOM from 'react-dom'
import React from 'react'
import Button from 'material-ui/Button';

function Button({size, variant, ...rest}){
	return <button style={{
		fontSize: size === 'large' ? 20:15,
		backgroundColor: vairant === 'primary'?'blue':'green'}}{...rest}/>
}