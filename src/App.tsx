import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { duplicatedCount } from './store/counter'
import { useSelector } from 'react-redux'
import { useAppDispatch } from './store'

function App(): React.ReactElement {
  const doubleCount = useSelector(duplicatedCount)
  const dispatch = useAppDispatch()

  const increment = (): void => {
    dispatch({ type: 'counter/increment', doubleCount })
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev"
           target="_blank"
           rel="noreferrer">
          <img src="/vite.svg"
               className="logo"
               alt="Vite logo" />
        </a>

        <a href="https://reactjs.org"
           target="_blank"
           rel="noreferrer">
          <img src={reactLogo}
               className="logo react"
               alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={increment}>
          Double count is {doubleCount}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
