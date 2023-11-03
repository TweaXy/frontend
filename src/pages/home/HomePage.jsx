import { useState } from "react";
import LoginPage from "../login/LoginPage";

function StartPage() {
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isForgetPasswordPopupOpen, setIsForgetPasswordPopupOpen] = useState(false);

  const openLoginPage = () => {
    setIsLoginPageOpen(true);
  };

  const closeLoginPage = () => {
    setIsLoginPageOpen(false);
  };

  const openForgetPasswordPopup = () => {
    setIsForgetPasswordPopupOpen(true);
  };

  const closeForgetPasswordPopup = () => {
    setIsForgetPasswordPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openLoginPage}>Login</button>
      {isLoginPageOpen && <LoginPage onClose={closeLoginPage} />}
    </div>
  );
}

export default StartPage;
