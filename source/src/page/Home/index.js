import { createElement, Component } from "../../lib/domManipulator.js"

class Home extends Component {

  mounted() {
  }
  render() {
    return createElement( 'div', {}, [ 'HOME' ] )
  }
}

export default Home
