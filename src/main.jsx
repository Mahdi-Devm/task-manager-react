import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LayOute from "./LayOute.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./pages/Task.jsx";
import AddTask from "./pages/AddTask.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LayOute />} />
        <Route path="/task" element={<Task />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
