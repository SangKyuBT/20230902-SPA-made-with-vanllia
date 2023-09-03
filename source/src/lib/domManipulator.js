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

//el이 생성되기 전
//el이 실행되고 난뒤
//el이 update된 후

export class Component {
  constructor( props ) {
    this.props = props
    this.status = {}
  }

  setStatus() {
    
  }

  //dom에 그려지기 전
  willMount() {
    
  }

  //dom에 append된 후
  didMount() {
    
  }

  //dom에서 제거 되기 전
  willUnmount() {

  }

  //dom에서 제거되기 직전
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
