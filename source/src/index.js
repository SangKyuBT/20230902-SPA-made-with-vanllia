import { render, createElement, createRoot } from './lib/domManipulator.js'
import App from './app.js'

const root = document.querySelector( '.root' )

// render( root, [ createElement( App ) ] )

createRoot( root, App )

