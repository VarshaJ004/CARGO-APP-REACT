import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddPort from './components/AddPort'
import AddClient from './components/AddClient'
import ViewClient from './components/ViewClient'
import ViewPort from './components/ViewPort'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddPort/> 
      <AddClient />
      <ViewClient />
      <ViewPort/>
    </>
  )
}

export default App
