import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './components/LandingPage/Landing'
import LinkCards from "./components/LinkCards/LinkCards.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/linkage" element={<LinkCards />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


