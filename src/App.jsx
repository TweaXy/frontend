import { useState } from "react";
import HomePage from "./pages/home/HomePage.jsx";
import ForgetPasswordPopUp from "./pages/forget-password/ForgetPasswordPage.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/forget-password" element={<ForgetPasswordPopUp />} />
        {/*TODO:: put the other routes here*/}
      </Routes>
    </Router>
  );
}

export default App;
