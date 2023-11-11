import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);

  const openLoginPage = () => {
    setIsLoginPageOpen(true);
  };

  const closeLoginPage = () => {
    setIsLoginPageOpen(false);
  };

  return (
    <div>
      <button onClick={openLoginPage}>Login</button>
      {isLoginPageOpen && <LoginPage onClose={closeLoginPage} />}
    </div>
  );
}

export default App;
