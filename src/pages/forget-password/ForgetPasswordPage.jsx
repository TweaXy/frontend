import React, { useState } from "react";
import "./ForgetPasswordPage.css";
import { forgetPasswordSchema } from "../../validations/authSchema";
import { useNavigate } from "react-router-dom";

const ForgetPasswordPage = ({ onClose }) => {
  const [curWindow, setWindow] = useState(0);
  const [userUUID, setUserUUID] = useState("");
  const [userCode, setUserCode] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userUUIDError, setUserUUIDError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  
  const navigate = useNavigate();

  const handleUUIDChange = (e) => {
    setUserUUID(e.target.value);
    setIsSubmitButtonDisabled(e.target.value.length === 0);
  };
  const handleCodeChange = (e) => {
    setUserCode(e.target.value);
    setIsSubmitButtonDisabled(e.target.value.length === 0);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handleNewPassword1Change = (e) => {
    setNewPassword1(e.target.value);
    if (e.target.value.length === 0 || newPassword2.length === 0) {
      setIsSubmitButtonDisabled(true);
    }
    else setIsSubmitButtonDisabled(false);
  };
  const handleNewPassword2Change = (e) => {
    setNewPassword2(e.target.value);
    if (newPassword1.length === 0 || e.target.value.length === 0) {
      setIsSubmitButtonDisabled(true);
    }
    else setIsSubmitButtonDisabled(false);
  };
  const handleUUIDSubmission = (e) => {
    e.preventDefault();
    setIsPending(true);
    forgetPasswordSchema
      .validate({ body: { UUID: userUUID } })
      .then(() => {
        fetch("http://16.171.65.142:3000/api/v1/auth/forgetPassword", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ UUID: userUUID }),
        })
          .then((response) => {
            setIsPending(false);
            setUserUUIDError("");
            return response.json();
          })
          .then((data) => {
            if (data.status != "success") setUserUUIDError(data.message);
            else {
              setIsSubmitButtonDisabled(true);
              setWindow(1);
            }
          })
          .catch((error) => {
            setUserUUIDError(error.message);
          });
      })
      .catch((error) => {
        setUserUUIDError(error.message);
      });
  };

  const handleCodeSubmission = (e) => {
    e.preventDefault();
    setIsPending(false);
    if (isSubmitButtonDisabled) {
      setIsSubmitButtonDisabled(false);
      setWindow(0);
    }
    else {
      setIsSubmitButtonDisabled(true);
      setWindow(2);
    }
  };

  const handleChangePasswordSubmission = (e) => {
    e.preventDefault();
    setIsPending(true);
    if (newPassword1 != newPassword2) {
      setIsPending(false);
      setUserUUIDError("The two entered passwords do not match!");
      return;
    }
    const lnk = "http://16.171.65.142:3000/api/v1/auth/resetPassword"+"/"+userUUID+"/"+userCode;
    fetch(lnk, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: newPassword1 }),
    })
      .then((response) => {
        setIsPending(false);
        if (response.ok) {
          return response.json();
        }
        else {
          alert("Code is wrong!");
          setWindow(1);
        }
      })
      .then((data) => {
        if (data.status != "success") setUserUUIDError(data.message);
        else {
          alert("The password has been changed succefully!");
          navigate(-1);
        }
      })
      .catch((error) => {
        if (error )
        setUserUUIDError(error.message);
      });
  }

  const enterUUIDWindow = () => {
    return (
      <div className="enter-uuid-window-for-forget-password">
        <h2>Find your TweaXy account</h2>
        <form>
          <label>
            Enter the email, phone number or username associated with your
            account to change your password.
          </label>
          <input
            type="text"
            placeholder="Email address, phone number or user name"
            value={userUUID}
            onChange={handleUUIDChange}
          />
          <button
            disabled={isSubmitButtonDisabled || isPending}
            onClick={handleUUIDSubmission}
          >
            Next
          </button>
        </form>
        {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">
            {userUUIDError}
          </div>
        )}
      </div>
    );
  };

  const enterCodeWindow = () => {
    let buttonText = isSubmitButtonDisabled ? "Back" : "Next";
    return (
      <div className="enter-uuid-window-for-forget-password">
        <h2>We sent you a code</h2>
        <form>
          <label>
            Check your phone to get your confirmation code. If you need to
            request a new code, go back and reselect a confirmation method.
          </label>
          <input
            type="text"
            placeholder="Enter your code"
            value={userCode}
            onChange={handleCodeChange}
          />
          <button disabled={isPending} onClick={handleCodeSubmission}>
            {buttonText}
          </button>
        </form>
        {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">
            {userUUIDError}
          </div>
        )}
      </div>
    );
  };

  const enterNewPasswordWindow = () => {
    return (
      <div className="enter-uuid-window-for-forget-password">
        <h2>Choose a new password</h2>
        <form>
          <label>
             Make sure your new password is 8 characters or more. 
             Try including numbers, letters,
             and punctuation marks for a <a href="https://help.twitter.com/en/safety-and-security/account-security-tips" target="_blank">strong password</a>. 
          </label>
          <label>
            You'll be logged out of all active X sessions after your password is changed. 
          </label>
          <input
            type="password"
            placeholder="Enter a new password"
            value={newPassword1}
            onChange={handleNewPassword1Change}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={newPassword2}
            onChange={handleNewPassword2Change}
          />
            <button
            disabled={isSubmitButtonDisabled || isPending}
            onClick={handleChangePasswordSubmission}
          >
            Change Password
          </button>
        </form>
        {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">
            {userUUIDError}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="login-window-wrapper-for-forget-password">
      <div className="overlay-for-forget-password" onClick={onClose}></div>
      <div className="login-window-for-forget-password">
        <div className="login-window-header-for-forget-password">
          <button
            className="login-window-close-button-for-forget-password"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {curWindow == 0 && enterUUIDWindow()}
        {curWindow == 1 && enterCodeWindow()}
        {curWindow == 2 && enterNewPasswordWindow()}
      </div>
    </div>
  );
};

export default ForgetPasswordPage;