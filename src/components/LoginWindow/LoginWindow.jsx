import { useState } from "react";
import LoginButton from "../LoginButton/LoginButton";
import LoginWithButton from "../LoginWithButton/LoginWithButton";
import LoginTextField from "../LoginTextField/LoginTextField";
import LoginWindowHeader from "../LoginWindowHeader/LoginWindowHeader";
import LoginOrSpan from "../LoginOrSpan/LoginOrSpan";
import "./LoginWindow.css";
import SignInSelectors from "../../shared/selectors/SignIn";

const LoginWindow = () => {
  const googleLogoSrc = "https://img.icons8.com/color/48/google-logo.png";
  const githubLogoSrc = "https://img.icons8.com/ios-glyphs/30/github.png";
  const FacebookLogoSrc = "https://img.icons8.com/fluency/48/facebook-new.png";

  const [UUID, setUUID] = useState("");
  const handleUUIDChange = (uuid) => {
    setUUID(uuid);
    console.log(uuid);
  };

  const handleUUIDSubmit = () => {
    console.log(`"Next" button is clicked`);
    // TODO handle api
  };

  const handleForgotPassword = () => {
    console.log(`"Forgot password?" button is clicked`);
    // TODO handle api
  };

  return (
    <div className="login-window-container">
      <LoginWindowHeader />
      <div className="login-window-body">
        <h1>Login to TweaXy</h1>
        <LoginWithButton
          text={`Login with GitHub`}
          imgSrc={githubLogoSrc}
          imgAlt="icon"
        />
        <LoginWithButton
          text={`Login with Google`}
          imgSrc={googleLogoSrc}
          imgAlt="icon"
        />
        <LoginWithButton
          text={`Login with Facebook`}
          imgSrc={FacebookLogoSrc}
          imgAlt="icon"
        />
        <LoginOrSpan />
        <LoginTextField
          value={UUID}
          data_test={SignInSelectors.EMAIL_FIELD}
          label={"Phone, email, or username"}
          onChange={handleUUIDChange}
        />
        <button className="next-button" onClick={handleUUIDSubmit}>
          Next
        </button>
        <LoginButton onClick={handleForgotPassword} text="Forgot password?" />
        <p>
          Don't have an account? <a>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginWindow;
