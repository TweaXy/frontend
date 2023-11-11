import React from "react";
import classes from "./buttonsStyle/SignInButton.module.css";

export default function SignInButton() {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Already have an account?</p>
      <div className={classes.buttonSignIn}>
        <p>Sign in</p>
      </div>
    </div>
  );
}
