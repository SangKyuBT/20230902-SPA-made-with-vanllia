function getElement( item ) {
  return item instanceof Component ? item.render() : item
}

export function render( targetEl, children ) {
  const elementList = children.map( child => getElement( child ) )
  targetEl.append( ...elementList )  
}

export function createElement( tagname, props, children ) {
  let el = document.createElement( tagname )
  
  if( props ) {
    Object.keys( props ).forEach( key => {
      if( eventHandlerMap[key] ) {
        eventHandlerMap[key]( el, props[key] )
      } 
    } )
  }

  if( children ) {
    render( el, children )
  }

  return el
}

export class Component {
  constructor( parentEl, tagname, attribute, children ) {
    this.parentEl = parentEl
    this.tagname = tagname
    this.attribute = attribute
    this.children = children
  }

  render() {
    // return createElement
  }
}

const eventHandlerMap = {
  'id': ( el, prop ) => {
    el.setAttribute( 'id', prop )
  },
  'class': ( el, prop ) => {
    el.setAttribute( 'class', prop )
  },
  'onClick': ( el, prop ) => {
    el.addEventListener( 'click', ( event ) => prop( event ) )
  }
}
