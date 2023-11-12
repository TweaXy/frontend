import "./LoginWithButton.css";

const LoginWithButton = ({ onClick, text, imgSrc, imgAlt }) => (
  <button className="login-with-button" onClick={onClick}>
    <img src={imgSrc} alt={imgAlt} />
    {text}
  </button>
);

export default LoginWithButton;
