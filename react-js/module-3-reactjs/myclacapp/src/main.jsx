import { StrictMode } from "react";
import CalcApp from "./AppComponetns";
import { createRoot } from "react-dom/client";
import './style.css'; 
createRoot(document.getElementById("root")).render
(    
    <StrictMode>
        <CalcApp/>
    </StrictMode>
);