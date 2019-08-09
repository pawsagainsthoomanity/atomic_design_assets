import { createMuiTheme } from '../node_modules/@material-ui/core/styles'
import blue from '../node_modules/@material-ui/core/colors/blue'
import blueGrey from '../node_modules/@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: blueGrey
	}
});

export { theme };