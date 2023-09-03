import { Component, createElement } from "./lib/domManipulator.js"
import Route from './route.js'
import Header from './components/Header.js'

class App extends Component {
  mounted() {
    // console.log( 'App', this )
  }
  render() {
    return createElement( 'div', { class: 'app' }, [ 
      createElement( Header ),
      createElement( Route )
    ] ) 
  }
}

export default App