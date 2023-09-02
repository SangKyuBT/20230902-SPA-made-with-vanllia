import { createElement } from "../lib/domManipulator.js"
import { push } from '../route.js'

function Header() {

  return createElement( 'head', { class: 'header' }, [
    createElement( 'div', { class: 'header-item left', onClick: () => { push( '/' ) } }, [ 'home' ] ),
    createElement( 'div', { class: 'header-item right', onClick: () => { push( '/components' ) } }, [ 'components' ] )
  ] )
}

export default Header 