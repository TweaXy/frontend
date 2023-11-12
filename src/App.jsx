import ForgetPasswordStartPage from "./pages/forget-password/ForgetPasswordStartPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/forget-password" element={<ForgetPasswordStartPage />} />
        {/*TODO:: put the other routes here*/}
      </Routes>
    </Router>
  );
}

export default App;
