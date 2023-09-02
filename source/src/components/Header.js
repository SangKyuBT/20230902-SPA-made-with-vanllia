import { createElement } from "../lib/domManipulator.js"
import { push } from '../route.js'

function Header() {

  return createElement( 'head', { class: 'header' }, [
    createElement( 'div', { class: 'header-item left', onClick: () => { push( { path: '/' } ) } }, [ 'home' ] ),
    createElement( 'div', { class: 'header-item right', onClick: () => { push( { path: '/components' } ) } }, [ 'components' ] )
  ] )
}

export default Header 