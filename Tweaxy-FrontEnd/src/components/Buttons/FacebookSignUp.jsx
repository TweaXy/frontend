import React, { useContext } from "react";
import classes from "./buttonsStyle/GoogleSignUp.module.css";
import FacebookLogo from "../../assets/facebookLogo.png";

export default function FacebookSignUp() {
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/google", "_self");
  };

  return (
    <div className={classes.googleSignUp} onClick={handleClick}>
      <p className={classes.logo}>
        <img src={FacebookLogo} width="20px" />
      </p>{" "}
      Sign up with Facebook
    </div>
  );
}
