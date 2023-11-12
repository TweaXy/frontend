import LoginStartPage from "./pages/LoginPage/LoginStartPage";
import ForgetPasswordStartPage from "./pages/forget-password/ForgetPasswordStartPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginStartPage />} />
        <Route path="/forget-password" element={<ForgetPasswordStartPage />} />
        {/*TODO:: put the other routes here*/}
      </Routes>
    </Router>
  );
}

export default App;
