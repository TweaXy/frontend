import "./LoginButton.css";

const LoginButton = ({ onClick, text }) => (
  <button className="login-button" onClick={onClick}>
    {text}
  </button>
);

export default LoginButton;
