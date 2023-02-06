import { useState } from 'react'
import './App.css'

import Routes from './routes';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes></Routes>
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
