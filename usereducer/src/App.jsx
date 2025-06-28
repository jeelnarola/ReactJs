import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducerState from './components/UseReducerState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <UseReducerState/>
    </>
  )
}

export default App
