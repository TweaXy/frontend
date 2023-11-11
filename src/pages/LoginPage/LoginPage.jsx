import { useState } from "react";
import LoginWindowHeader from "../../components/LoginWindowHeader/LoginWindowHeader";
import EnterUUIDPage from "./EnterUUIDPage";
import EnterPasswordPage from "./EnterPasswordPage";
import "./LoginPage.css";

const LoginPage = ({ onClose }) => {
  const [curPage, setCurPage] = useState(0);

  const [formData, setFormData] = useState({
    UUID: "",
    password: "",
  });

  const handleUUIDChange = (uuid) => {
    setFormData((prevData) => ({
      ...prevData,
      UUID: uuid,
    }));
  };

  const handleUUIDSubmit = () => {
    setCurPage(1);
  };

  const handlePasswordChange = (password) => {
    setFormData((prevData) => ({
      ...prevData,
      password: password,
    }));
  };

  const handlePasswordSubmit = () => {
    // TODO
  };

  const handleForgotPassword = () => {
    // TODO
  };

  const handleSignUp = () => {
    // TODO
  };

  return (
    <div className="login-page-container">
      <LoginWindowHeader onClose={onClose} />
      {curPage === 0 && (
        <EnterUUIDPage
          UUID={formData.UUID}
          handleUUIDChange={handleUUIDChange}
          handleUUIDSubmit={handleUUIDSubmit}
          handleForgotPassword={handleForgotPassword}
          handleSignUp={handleSignUp}
        />
      )}
      {curPage === 1 && (
        <EnterPasswordPage
          UUID={formData.UUID}
          password={formData.password}
          handlePasswordChange={handlePasswordChange}
          handlePasswordSubmit={handlePasswordSubmit}
          handleForgotPassword={handleForgotPassword}
          handleSignUp={handleSignUp}
        />
      )}
    </div>
  );
};

export default LoginPage;
