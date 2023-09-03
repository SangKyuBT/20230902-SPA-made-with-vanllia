import { createElement, Component } from "../lib/domManipulator.js"
import { push } from '../route.js'

class Header extends Component {
  mounted() {
    console.log( this )
  }
  render() {
    return createElement( 'head', { class: 'header' }, [
      createElement( 'div', { class: 'header-item left', onClick: () => { push( { path: '/' } ) } }, [ 'home' ] ),
      createElement( 'div', { class: 'header-item right', onClick: () => { push( { path: '/components' } ) } }, [ 'components' ] )
    ] ) 
  }
}

export default Header 