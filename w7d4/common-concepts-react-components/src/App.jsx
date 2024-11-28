import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledComponentButFancy from './components/ControlledComponentButFancy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ControlledComponentButFancy />
    </>
  )
}

export default App
