import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LayOute from "./LayOute.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LayOute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
