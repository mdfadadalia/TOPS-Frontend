import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import CalcApp from "./App";

createRoot(document.getElementById("root-app")).render
(
  <StrictMode>
    <CalcApp/>    
  </StrictMode>
);