import Home from './page/Home/index.js'
import Contents from './page/Contents/index.js'
import { Component, createElement } from './lib/domManipulator.js'

export const routeList = [
  {
    path: '/', 
    component: Home,
  },
  {
    path: '/components',
    component: Contents
  }
] 

export function location() {
  return window.location.pathname
}

export function push( { path } ) {
  const curPathname = location()
  if( path === curPathname ) {
    return
  }

  const locationChangeEvent = new CustomEvent( 'locationChange', { detail: { path } } )
  document.dispatchEvent( locationChangeEvent )
  window.history.pushState( '', '', path )
}

export function update( curEl, targetPath ) {
  const { component } = routeList.find( ( { path } ) => path === targetPath )
  const newEl = component()
  curEl.replaceWith( newEl )
  return newEl
}

export function back() {
  window.history.go( -1 )
}

export default class Route extends Component {
  constructor( props ) {
    super( props )
    this.component = null
  }

  create() {
    const pathname = location()
    const { component } = routeList.find( ( { path } ) => path === pathname )
    this.component = component
  }

  mounted() {
    this.locationChangeHandler = ( event ) => {
      this.changeElement( event.detail.path )
    }

    this.popstateHandler = () => {
      this.changeElement( location() )
    }

    document.addEventListener( 'locationChange', this.locationChangeHandler )
    window.addEventListener( 'popstate', this.popstateHandler )
  }

  unmounted() {
    document.removeEventListener( 'locationChange', this.locationChangeHandler )
    window.removeEventListener( 'popstate', this.popstateHandler )
  }

  changeElement( targetPath ) {
    const { component } = routeList.find( ( { path } ) => path === targetPath )
    const componentInstance = createElement( component, {} )
    componentInstance.render()

    this.el.replaceWith( componentInstance.el )
    this.el = componentInstance.el
    componentInstance.mounted()
    this.component = component
  }

  render() {
    return createElement( this.component, {} ) 
  }
}