import React, { useState } from "react";
import FloatingWindow from "../FloatingWindow";
import classes from "./buttonsStyle/ButtonSignUp.module.css";
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
      {isWindowOpen && <FloatingWindow onClose={closeWindow} />}
    </>
  );
}
export default SignUpButton;
