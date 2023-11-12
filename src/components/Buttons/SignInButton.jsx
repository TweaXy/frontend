import { useState } from "react";
import classes from "./buttonsStyle/SignInButton.module.css";
import LoginPage from "../../pages/LoginPage/LoginPage"

export default function SignInButton() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const openWindow = () => {
    setIsWindowOpen(true);
  };
  const closeWindow = () => {
    setIsWindowOpen(false);
  };
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Already have an account?</p>
      <button className={classes.buttonSignIn} onClick={openWindow}>
        Sign in
      </button>
      {isWindowOpen && <LoginPage onClose={closeWindow} />}
    </div>
  );
}
