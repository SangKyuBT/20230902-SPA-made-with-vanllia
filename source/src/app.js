import { createElement } from "./lib/domManipulator.js"
import Route from './route.js'
import Header from './components/Header.js'

function App() {
  return createElement( 'div', { class: 'app' }, [ 
    Header(),
    Route()
  ] ) 
}

export default App