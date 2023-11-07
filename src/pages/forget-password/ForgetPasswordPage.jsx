import React, { useState } from "react";
import "./ForgetPasswordPage.css";
import { forgetPasswordSchema } from "../../validations/authSchema";


const ForgetPasswordPage = ({ onClose }) => {
  const [curWindow, setWindow] = useState(0);
  const [userUUID, setUserUUID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userUUIDError, setUserUUIDError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);


  const handleUUIDChange = (e) => {
    setUserUUID(e.target.value);
    setIsSubmitButtonDisabled(e.target.value.length === 0);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handleUUIDSubmission = (e) => {
    e.preventDefault();
    forgetPasswordSchema
      .validate({ body: { UUID: userUUID} })
      .then(() => {
        setWindow(1);
      })
      .catch((error) => {
        setUserUUIDError(error.message);
      });
  };

  const enterUUIDWindow = () => {
    return (
      <div className="enter-uuid-window-for-forget-password">
        <h2>Find your TweaXy account</h2>
        <form>
          <label>Enter the email, phone number or username associated with your account to change your password.</label>
          <input
            type="text"
            placeholder="Email address, phone number or user name"
            value={userUUID}
            onChange={handleUUIDChange}
          />
          <button disabled={isSubmitButtonDisabled} onClick={handleUUIDSubmission}>Next</button>
        </form>
        {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">{userUUIDError}</div>
        )}
      </div>
    );
  };

  const enterPasswordWindow = () => {
    return (
      <div className="enter-password-window-for-forget-password">
        <h2>Enter your password</h2>
        <form>
          <input type="text" placeholder={userUUID} className="uuid-input-for-forget-password" />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={handlePasswordChange}
          />
        </form>
        <a href="#">Forgot password?</a> {/* TODO: handle forgot password*/}
        <button onClick={handleLogin}>Login</button>
        {userPasswordError && (
          <div className="user-password-error-for-forget-password">{userPasswordError}</div>
        )}
        <p>
          Don't have an account? <a href="#">Sign up</a>{" "}
          {/* TODO: handle sign up */}
        </p>
      </div>
    );
  };

  return (
    <div className="login-window-wrapper-for-forget-password">
      <div className="overlay-for-forget-password" onClick={onClose}></div>
      <div className="login-window-for-forget-password">
        <div className="login-window-header-for-forget-password">
          <button className="login-window-close-button-for-forget-password" onClick={onClose}>
            &times;
          </button>
        </div>
        {curWindow == 0 && enterUUIDWindow()}
        {curWindow == 1 && enterPasswordWindow()}
      </div>
    </div>
  );
};

export default ForgetPasswordPage;