import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<WelcomePage />} />
          {/*  <Route path="/Mail" element={<Mail />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
