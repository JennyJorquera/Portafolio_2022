import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { useParams } from "react-router-dom";

import Inicio from "./Inicio";
import PedirCompra from "./PedirCompra";
import Listapedidos from "./Listapedidos"; 
import Detalle from "./Detalle";



export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Cliente" element={<PedirCompra />} />
          <Route path="/mispedidos" element={<Listapedidos />} />
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
      </Router>
    </>
  );
}
