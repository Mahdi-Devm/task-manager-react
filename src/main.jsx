import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TaskManager from "./TaskManager.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskManager />
  </StrictMode>
);
