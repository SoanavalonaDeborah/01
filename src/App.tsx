import { useState } from 'react'
import './assets/css/App.css'
import Formulaire from './components/formulaire'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Formulaire />
    </>
  )
}

export default App
