import { createElement, Component } from "../lib/domManipulator.js"

class Input extends Component {
  constructor( props ) {
    super( props )
  }

  onClickHandler() {
    
  }

  onInputHandler( event ) {
    console.log( event )
  }

  onFocusHandler( event ) {
    console.log( 'focus', event )
  }
  
  render() {
    return createElement( 'input', { 
      class: 'input', 
      value: this.props.value || '',
      onFocus: this.onFocusHandler, 
      onInput: this.onInputHandler, 
    } )
  }
}

export default Input