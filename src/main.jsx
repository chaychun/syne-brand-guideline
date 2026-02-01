import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SyneBrandGuide from "./SyneBrandGuide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SyneBrandGuide />
  </StrictMode>,
);
