import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { CallListProductos } from "./screen/ListProcutos";
import { FormProductos } from "./screen/FormProductos";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="./productos-list" />} />
            <Route path="/productos-list" element={<CallListProductos />} />
            <Route path="/productos-create" element={<FormProductos />} />
            <Route path="/productos/:id" element={<FormProductos />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
