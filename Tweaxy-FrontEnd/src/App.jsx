import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
