import { useState } from "react";
import "./ForgetPasswordPage.css";

const ForgetPassswordPage = ({ onClose }) => {
  const [curWindow, setWindow] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");


  const handleForgetPassword = () => {
    navigate("forget-password");
  };

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
        <button onClick={handleForgetPassword}>Forgot password?</button>{" "}
        {/* TODO: handle button click */}
        <p>
          Don't have an account? <a href="#">Sign up</a>{" "}
          {/* TODO: handle sign up */}
        </p>
      </div>
    );
  };

export default ForgetPassswordPage;
