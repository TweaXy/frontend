import { useState } from "react";
import "./LoginPage.css";
import { loginSchema } from "../../validations/authSchema";
import { useNavigate } from "react-router-dom";
import SignInSelectors from "../../shared/selectors/SignIn";

const LoginPage = ({ onClose }) => {
  const [curWindow, setWindow] = useState(0);
  const [userUUID, setUserUUID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userUUIDError, setUserUUIDError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");

  const navigate = useNavigate();

  const handleForgetPasswordButton = (e) => {
    navigate("forget-password");
  };

  const handleUUIDChange = (e) => {
    setUserUUID(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handleUUIDSubmission = (e) => {
    e.preventDefault();
    loginSchema
      .validate({ body: { UUID: userUUID, password: "" } })
      .then(() => {
        setUserUUIDError("");
        setWindow(1);
      })
      .catch((error) => {
        setUserUUIDError(error.message);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginSchema
      .validate({ body: { UUID: userUUID, password: userPassword } })
      .then(() => {
        setUserPasswordError("");
        // TODO: Handle the login process here
      })
      .catch((error) => {
        setUserPasswordError(error.message);
      });
  };

  const enterUUIDWindow = () => {
    return (
      <div className="enter-uuid-window">
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
            type="text"
            placeholder="Phone, email, or username"
            value={userUUID}
            onChange={handleUUIDChange}
          />
          <button onClick={handleUUIDSubmission}>Next</button>
        </form>
        {userUUIDError && (
          <div className="user-uuid-error">{userUUIDError}</div>
        )}
        <button onClick={handleForgetPasswordButton}>Forgot password?</button>
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
          <input type="text" placeholder={userUUID} className="uuid-input" />
          <input
            type="password"
            placeholder="Password"
            data-test={SignInSelectors.PASSWORD}
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
        {curWindow == 0 && enterUUIDWindow()}
        {curWindow == 1 && enterPasswordWindow()}
      </div>
    </div>
  );
};

export default LoginPage;