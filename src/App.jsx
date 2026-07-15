import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddPort from './components/AddPort'
import AddClient from './components/AddClient'
import ViewClient from './components/ViewClient'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<AddClient />} />

        <Route path="/view-client" element={<ViewClient />} />

      </Routes>

    </BrowserRouter>
    <>
     <AddPort/> 
      <AddClient />
      <ViewClient />
    </>
  )
}

export default App