import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddClient from "./components/AddClient";
import ViewClient from "./components/ViewClient";
import AddCargo from "./components/AddCargo";
import AddPort from "./components/AddPort";
import ViewPort from "./components/ViewPort";

function App() {
  return (
    <>

    
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddClient />} />
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