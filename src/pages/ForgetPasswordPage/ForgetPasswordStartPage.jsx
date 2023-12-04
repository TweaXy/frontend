import { useState } from "react";
import ForgetPasswordPage from "./ForgetPasswordPage.jsx";

function ForgetPasswordStartPage() {
  const [isForgetPasswordPopupOpen, setIsForgetPasswordPopupOpen] =
    useState(true);

  const openForgetPasswordPopup = () => {
    setIsForgetPasswordPopupOpen(true);
  };

  const closeForgetPasswordPopup = () => {
    setIsForgetPasswordPopupOpen(false);
  };

  return (
    <div className="App">
      {isForgetPasswordPopupOpen && (
        <ForgetPasswordPage onClose={closeForgetPasswordPopup} />
      )}
    </div>
  );
}

export default ForgetPasswordStartPage;
