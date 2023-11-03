import "./App.css";
import React, { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<WelcomePage />} />
          {/* <button onClick={openWindow}>Open Floating Window</button>
          {isWindowOpen && (
            <FloatingWindow onClose={closeWindow}>
              <h2>Floating Window Content</h2>
              <p>This is a sample floating window.</p>
            </FloatingWindow>
          )} */}
          {/* {  <Route exact={true} path="/Mail" element={<Mail/>} />} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
