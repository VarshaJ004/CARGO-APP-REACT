import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddClient from "./components/AddClient";
import ViewClient from "./components/ViewClient";
import AddCargo from "./components/AddCargo";
import AddPort from "./components/AddPort";
import ViewPort from "./components/ViewPort";
import Home from "./components/Home";
import ViewCargo from './components/ViewCargo'

function App() {
  return (
    <>
      <ViewCargo />

    </>
 
  )
  
    <BrowserRouter>
      <Routes>
        <Route path="/add-client" element={<AddClient />} />
        <Route path="/" element={<Home />} />
        <Route path="/view-client" element={<ViewClient />} />
        <Route path="/add-cargo" element={<AddCargo />} />
        <Route path="/add-port" element={<AddPort />} />
        <Route path="/view-port" element={<ViewPort />} />
      </Routes>
    </BrowserRouter>
      </>
  );
}
export default App;