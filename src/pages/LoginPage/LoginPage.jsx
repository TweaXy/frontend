import "./LoginPage.css";
import { useState } from "react";
import EnterUUIDPage from "./EnterUUIDPage";
import EnterPasswordPage from "./EnterPasswordPage";
import signInWithGoogle from "../../apis/signInWithGoogle";
import LoginWindowHeader from "../../components/LoginWindowHeader/LoginWindowHeader";
import checkUserUUID from "../../apis/checkUserUUID";
import login from "../../apis/login";

const LoginPage = ({ onClose }) => {
  const [curPage, setCurPage] = useState(0);

  const [formData, setFormData] = useState({
    UUID: "",
    password: "",
  });

  const [UUIDError, setUUIDError] = useState("");
  const [LoginError, setLoginError] = useState("");

  const handleUUIDChange = (uuid) => {
    setFormData((prevData) => ({
      ...prevData,
      UUID: uuid,
    }));
    setUUIDError("");
  };

  const handlePasswordChange = (password) => {
    setFormData((prevData) => ({
      ...prevData,
      password: password,
    }));
    setLoginError("");
  };

  const handleUUIDSubmit = async () => {
    if (formData.UUID.trim() === "") {
      setUUIDError("Please enter your phone, email, or username.");
    } else {
      try {
        const result = await checkUserUUID(formData.UUID);

        if (result.status === "success") {
          setCurPage(1);
        } else {
          if (result.message == "no user found ") {
            setUUIDError("Sorry, we couldn't find your account.");
          } else {
            setUUIDError("Please retry enter your UUID");
          }
        }
      } catch (error) {
        console.error("Error checking user UUID:", error.message);
      }
    }
  };

  const handleLogin = async () => {
    if (formData.password.trim() === "") {
      setUUIDError("Please enter your password.");
    } else {
      try {
        const result = await login(formData.UUID, formData.password);

        if (result.status === "success") {
          // TODO route to home page
          console.log("logged in successfully!");
          console.log("user data: ", result);
        } else {
          setLoginError("Wrong password!");
        }
      } catch (error) {
        console.error("Error signing in:", error.message);
      }
    }
  };

  const handleForgotPassword = () => {
    // TODO: route to forgot password page
  };

  const handleSignUp = () => {
    // TODO: route to sign up page
  };

  return (
    <div className="login-page-container">
      <LoginWindowHeader onClose={onClose} />
      {curPage === 0 && (
        <EnterUUIDPage
          UUID={formData.UUID}
          UUIDError={UUIDError}
          handleUUIDChange={handleUUIDChange}
          handleUUIDSubmit={handleUUIDSubmit}
          handleForgotPassword={handleForgotPassword}
          handleLoginWithGoogle={signInWithGoogle}
          handleSignUp={handleSignUp}
        />
      )}
      {curPage === 1 && (
        <EnterPasswordPage
          UUID={formData.UUID}
          password={formData.password}
          LoginError={LoginError}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          handleForgotPassword={handleForgotPassword}
          handleSignUp={handleSignUp}
        />
      )}
    </div>
  );
};

export default LoginPage;