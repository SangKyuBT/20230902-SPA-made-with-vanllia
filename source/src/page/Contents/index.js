import { createElement, Component } from "../../lib/domManipulator.js"
import Input from '../../components/Input.js'

class Conpents extends Component {
  render() {
    return createElement( 'div', {}, [ 
      createElement( Input )
    ] )
  }
}

export default Conpents
