import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
