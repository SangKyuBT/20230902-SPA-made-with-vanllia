import Home from './page/Home/index.js'
import Contents from './page/Contents/index.js'

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

export default function Route() {
  const pathname = location()
  const { component } = routeList.find( ( { path } ) => path === pathname )
  
  let el = component()
  document.addEventListener( 'locationChange', event => {
    el = update( el, event.detail.path )
  } )

  window.addEventListener( 'popstate', () => {
    el = update( el, location() )
  } )
  
  return el
}