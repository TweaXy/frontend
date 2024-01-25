import React, { useState } from "react";
import "./ForgetPasswordPage.css";
import { forgetPasswordSchema } from "../../validations/authSchema";
import { useNavigate } from "react-router-dom";
import SignInErrors from "../../shared/errors/SignInErrors";
import SignInSelectors from "../../shared/selectors/SignIn";

const ForgetPasswordPage = () => {
  const [curWindow, setWindow] = useState(0);
  const [userUUID, setUserUUID] = useState("");
  const [userCode, setUserCode] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [userUUIDError, setUserUUIDError] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  
  const navigate = useNavigate();

  const handleClose = (e) => {
    navigate(-1);
  };

  const handleUUIDChange = (e) => {
    setUserUUID(e.target.value);
    setIsSubmitButtonDisabled(e.target.value.length === 0);
  };
  const handleCodeChange = (e) => {
    setUserCode(e.target.value);
    setIsSubmitButtonDisabled(e.target.value.length === 0);
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
        fetch("https://tweaxybackend.mywire.org/api/v1/auth/forgetPassword", {
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
            if (data.status != "success") {
              if (data.message == "User not found") setUserUUIDError(SignInErrors.UNREGISTERED_EMAIL);
              else setUserUUIDError(data.message);
            }
            else {
              setIsSubmitButtonDisabled(userCode.length == 0);
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

    if (isSubmitButtonDisabled) {
      setIsSubmitButtonDisabled(userUUID.length == 0);
      setWindow(0);
      return;
    }
    setIsPending(true);

    const lnk = "https://tweaxybackend.mywire.org/api/v1/auth/checkResetToken"+"/"+userUUID+"/"+userCode;

    console.log(lnk);
    fetch(lnk, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        setIsPending(false);
        return response.json();
      })
      .then((data) => {
        if (data.status != "success") {
          setUserUUIDError("The code is wrong or expired please try again");
        }
        else {
          console.log("code entered is right!");
          setUserUUIDError("");
          setIsSubmitButtonDisabled(true);
          setWindow(2);
        }
      })
      .catch((error) => {
        if (error )
        console.log(error.message);
      });
  };

  const handleChangePasswordSubmission = (e) => {
    e.preventDefault();
    setIsPending(true);
    if (newPassword1 != newPassword2) {
      setIsPending(false);
      setUserUUIDError("The two entered passwords do not match!");
      return;
    }
    const lnk = "https://tweaxybackend.mywire.org/api/v1/auth/resetPassword"+"/"+userUUID+"/"+userCode;
    fetch(lnk, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: newPassword1 }),
    })
      .then((response) => {
        setIsPending(false);
        return response.json();
      })
      .then((data) => {
        if (data.status != "success") setUserUUIDError(data.message);
        else {
          navigate(-1);
        }
      })
      .catch((error) => {
        if (error) console.log(error.message);
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
            data-test={SignInSelectors.FORGET_PASSWORD_EMAIL_FIELD}
            type="text"
            placeholder="Email address, phone number or user name"
            value={userUUID}
            onChange={handleUUIDChange}
          />
          {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">
            {userUUIDError}
          </div>
          )}
          <button
            data-test={SignInSelectors.NEXT_BUTTON}
            disabled={isSubmitButtonDisabled || isPending}
            onClick={handleUUIDSubmission}
          >
            Next
          </button>
        </form>
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
            data-test={SignInSelectors.FORGET_PASSWORD_VERIFICATION_FIELD}
            type="text"
            placeholder="Enter your code"
            value={userCode}
            onChange={handleCodeChange}
          />
          {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">
            {userUUIDError}
          </div>
           )}
          <button data-test={SignInSelectors.NEXT_BUTTON} disabled={isPending} onClick={handleCodeSubmission}>
            {buttonText}
          </button>
        </form>
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
            data-test={SignInSelectors.FORGET_PASSWORD_NEW_PASSWORD_FIELD}
            placeholder="Enter a new password"
            value={newPassword1}
            onChange={handleNewPassword1Change}
          />
          <input
            data-test={SignInSelectors.FORGET_PASSWORD_CONFIRM_PASSWORD_FIELD}
            type="password"
            placeholder="Confirm your password"
            value={newPassword2}
            onChange={handleNewPassword2Change}
          />
          {userUUIDError && (
          <div className="user-uuid-error-for-forget-password">
            {userUUIDError}
          </div>
          )}
            <button
            data-test={SignInSelectors.NEXT_BUTTON}
            disabled={isSubmitButtonDisabled || isPending}
            onClick={handleChangePasswordSubmission}
          >
            Change Password
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="login-window-wrapper-for-forget-password">
      <div className="overlay-for-forget-password" onClick={handleClose}></div>
      <div className="login-window-for-forget-password">
        <div className="login-window-header-for-forget-password">
          <button
            className="login-window-close-button-for-forget-password"
            onClick={handleClose}
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
