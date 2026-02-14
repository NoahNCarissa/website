import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Enter Password
      </div>
      <div className='bg-primary'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs justify-content-between">
        <button className='btn btn-primary'>Test Button</button>
        <button className='btn btn-secondary'>Test Button</button>
        <button className='btn btn-success'>Test Button</button>
        <button className='btn btn-info'>Test Button</button>
        <button className='btn btn-warning'>Test Button</button>
        <button className='btn btn-danger'>Test Button</button>
      </p>
    </>
  )
}

export default App
