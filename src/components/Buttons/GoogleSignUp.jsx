import React, { useContext } from "react";
import classes from "./buttonsStyle/GoogleSignUp.module.css";
import googleLogo from "../../assets/googleLogo.png";

export default function GoogleSignUp () {
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/google", "_self");
  };

  return (
    <div className={classes.googleSignUp} onClick={handleClick}>
      <p className={classes.logo}>
        <img src={googleLogo} width="20px" />
      </p>{" "}
      Sign up with Google
    </div>
  );
};

