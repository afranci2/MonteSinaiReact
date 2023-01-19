import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Admin,
  Home,
  Conocernos,
  CreenciasFundamentales,
  Lideres,
  MensajeDelPresidente,
  Iglesias,
} from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/conocernos" element={<Conocernos />}></Route>
        <Route
          exact
          path="/conocernos/creenciasfundamentales"
          element={<CreenciasFundamentales />}
        ></Route>
        <Route exact path="/conocernos/lideres" element={<Lideres />}></Route>
        <Route
          exact
          path="/conocernos/mensajedelpresidente"
          element={<MensajeDelPresidente />}
        ></Route>
        <Route exact path="/iglesias" element={<Iglesias />}></Route>
        <Route exact path="/iglesias/:id" element={<Iglesias />}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);
