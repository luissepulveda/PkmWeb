import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Principal from "./components/Home/Principal";
import Navbars from "./components/navbar/Navbar";
import { Buscador } from "./components/BuscadorPokemon/Buscador";

function App() {
  return (
        <div className="App">

          <BrowserRouter>
            <Navbars />
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/Buscador" element={<Buscador />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        );
}

        export default App;
