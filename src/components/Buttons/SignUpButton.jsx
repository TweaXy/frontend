import { useState } from "react";
import classes from "./buttonsStyle/ButtonSignUp.module.css";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";

function SignUpButton() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const openWindow = () => {
    setIsWindowOpen(true);
  };
  const closeWindow = () => {
    setIsWindowOpen(false);
  };
  return (
    <>
      <button className={classes.ButtonSignUp} onClick={openWindow}>
        Create account
      </button>
      {isWindowOpen && <SignUpPage onClose={closeWindow} />}
    </>
  );
}
export default SignUpButton;
