import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
  )
}

export default App