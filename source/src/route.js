import Home from './page/Home/index.js'
import Contents from './page/Contents/index.js'
import { createElement, render , Component} from './lib/domManipulator.js'

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
}

export function back() {
  
}


export default function Route() {
  const pathname = location()
  const { component } = routeList.find( ( { path } ) => path === pathname )
  
  let el = component()
  document.addEventListener( 'locationChange', () => {
    //여기서 parentEl를 찾아서 자식 el를 다 없앤다
    //해당 path에 맞는 el를 찾아 rendering 시킨다.
  } )
  
  return el
}