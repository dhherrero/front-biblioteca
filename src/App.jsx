import {Link} from "wouter";
import './App.css'

import Routes from './routes';


function App() {

  return (
    <div className="App">
      <div>
        <Link to="/" target="_blank">
        <img src="/grema.png" className="logo" alt="GREMA logo" />
        </Link>
        <h1>Biblioteca GREMA</h1>
      </div>
      <Routes></Routes>
      
      
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
