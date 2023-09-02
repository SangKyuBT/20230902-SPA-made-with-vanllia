import { render } from './lib/domManipulator.js'
import App from './app.js'

const root = document.querySelector( '.root' )

render( root, [ App() ] )