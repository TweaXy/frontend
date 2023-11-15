import { TextField } from "@mui/material";
import LoginOrSpan from "../../components/LoginOrSpan/LoginOrSpan";
import LoginWithButton from "../../components/LoginWithButton/LoginWithButton";
import "./LoginPage.css";
import SignInSelectors from "../../shared/selectors/SignIn";

const EnterUUIDPage = ({
  UUID,
  UUIDError,
  handleUUIDChange,
  handleUUIDSubmit,
  handleForgotPassword,
  handleLoginWithGoogle,
  handleSignUp,
}) => {
  const googleLogoSrc = "https://img.icons8.com/color/48/google-logo.png";

  return (
    <div className="login-page-body">
      <h1>Login to TweaXy</h1>
      <LoginWithButton
        onClick={handleLoginWithGoogle}
        text={"Login with Google"}
        imgSrc={googleLogoSrc}
        imgAlt={"google-logo"}
      />
      <LoginOrSpan />
      <TextField
        variant="outlined"
        id="outlined-basic"
        className="login-uuid-field"
        label="Phone, email, or username"
        data-test={SignInSelectors.EMAIL_FIELD}
        value={UUID}
        onChange={(e) => handleUUIDChange(e.target.value)}
      />
      {UUIDError && <p className="error-message">{UUIDError}</p>}
      <button data-test={SignInSelectors.NEXT_BUTTON} className="black-button" onClick={handleUUIDSubmit}>
        Next
      </button>
      <button data-test={SignInSelectors.FORGET_PASSWORD_BUTTON} className="white-button" onClick={handleForgotPassword}>
        Forgot password?
      </button>
      <p>
        Don't have an account? <a onClick={handleSignUp}>Sign up</a>
      </p>
    </div>
  );
};

export default EnterUUIDPage;
