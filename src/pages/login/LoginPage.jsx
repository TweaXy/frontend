import { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onClose }) => {
  const [curWindow, setWindow] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handleEmailSubmission = (e) => {
    e.preventDefault();
    if (!userEmail) {
      setUserEmailError("Please enter your email.");
      return;
    }
    // TODO: handle other email error before proceeding to enter password window
    setWindow(1);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!userPassword) {
      setUserPasswordError("Please enter your password.");
      return;
    }
    // TODO: handle login and other password checkers
  };

  const enterEmailWindow = () => {
    return (
      <div className="enter-email-window">
        <h2>Login to TweaXy</h2>
        <button>
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google Icon"
          />
          Login with Google
        </button>
        <button>
          <img
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="GitHub Icon"
          />
          Login with Github
        </button>
        <button>
          <img
            src="https://img.icons8.com/fluency/48/facebook-new.png"
            alt="Facebook Icon"
          />
          Login with Facebook
        </button>
        <hr></hr>
        <span>Or</span>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <button onClick={handleEmailSubmission}>Next</button>
        </form>
        {userEmailError && (
          <div className="user-email-error">{userEmailError}</div>
        )}
        <button>Forgot password?</button> {/* TODO: handle button click */}
        <p>
          Don't have an account? <a href="#">Sign up</a>{" "}
          {/* TODO: handle sign up */}
        </p>
      </div>
    );
  };

  const enterPasswordWindow = () => {
    return (
      <div className="enter-password-window">
        <h2>Enter your password</h2>
        <form>
          <input type="email" placeholder={userEmail} className="email-input" />
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
          <div className="user-password-error">{userPasswordError}</div>
        )}
        <p>
          Don't have an account? <a href="#">Sign up</a>{" "}
          {/* TODO: handle sign up */}
        </p>
      </div>
    );
  };

  return (
    <div className="login-window-wrapper">
      <div className="overlay" onClick={onClose}></div>
      <div className="login-window">
        <div className="login-window-header">
          <button className="login-window-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        {curWindow == 0 && enterEmailWindow()}
        {curWindow == 1 && enterPasswordWindow()}
      </div>
    </div>
  );
};

export default LoginPage;
