function validCompomentInstance( item ) {
  return item instanceof Component
}

export function createRoot( el, component ) {
  const rootComponentInstance = new Component()
  rootComponentInstance.el = el

  const componentInstance = createElement( component )
  componentInstance.create()

  render( el, [ componentInstance ] )

  rootComponentInstance.children = [ componentInstance ]
}

export function render( targetEl, children ) {
  children.forEach( child => {
    if( validCompomentInstance( child ) ) {
      targetEl.appendChild( child.el )
      child.mounted()
    } else {
      targetEl.appendChild( document.createTextNode( child ) )
    }
  } )
}

export function createElement( tag, props, children = [] ) {
  const isComponent = tag instanceof Object
  
  let componentInstance
  if( isComponent ) {
    componentInstance = new tag( props )
    componentInstance.create()
    const rootComponentInstance = componentInstance.render()
    componentInstance.el = rootComponentInstance.el
    componentInstance.children = rootComponentInstance.children 
    componentInstance.container = tag 
  } else {
    componentInstance = new Component( props )
    componentInstance.create()
    componentInstance.el = document.createElement( tag )
    componentInstance.container = tag

    Object.keys( props ).forEach( key => {
      if( eventHandlerMap[key] ) {
        eventHandlerMap[key]( componentInstance.el, props[key] )
      } 
    } )
  } 

  if( children.length ) {
    render( componentInstance.el, children )
    componentInstance.children.push( ...children ) 
  }

  return componentInstance
}

export class Component {
  constructor( props ) {
    this.props = props
    this.$tag = null
    this.$el = null
    this.$children = []
  }

  set el( $el ) {
    this.$el = $el 
  }

  set tag( tag ) {
    this.$tag = tag
  }

  set children( children ) {
    this.$children = children
  }

  get el() {
    return this.$el
  }

  get tag() {
    return this.$tag
  }

  get children(  ) {
    return this.$children
  }

  create() {
  }

  mounted() {
  }

  unmount() {
  }

  unmounted() {
  }

  render() {
    return createElement( this.tag, this.props, this.$children )
  }
}

const eventHandlerMap = {
  'id': ( el, prop ) => {
    el.setAttribute( 'id', prop )
  },
  'class': ( el, prop ) => {
    el.setAttribute( 'class', prop )
  },
  'value': ( el, prop ) => {
    el.setAttribute( 'value', prop )
  },
  'onClick': ( el, prop ) => {
    el.addEventListener( 'click', ( event ) => prop( event ) )
  },
  'onInput': ( el, prop ) => {
    el.addEventListener( 'input', ( event ) => prop( event ) )
  },
  'onChange': ( el, prop ) => {
    el.addEventListener( 'change', ( event ) => prop( event ) )
  },
  'onFocus': ( el, prop ) => {
    el.addEventListener( 'focus', ( event ) => prop( event ) )
  },
  'onBlur': ( el, prop ) => {
    el.addEventListener( 'blur', ( event ) => prop( event ) )
  },
}
