import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
     <p>Hello</p>
     <FontAwesomeIcon icon={faRocket}/>
     <FontAwesomeIcon icon={faCoffee}/>
    </div>
  );
}

export default App;