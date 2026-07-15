import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddClient from './components/AddClient'
import ViewClient from './components/ViewClient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddClient />
      <ViewClient />
    </>
  )
}

export default App
