import React from "react";
import classes from "./SignUpApple.module.css";
import AppleIcon from "../../assets/AppleLogo.png";
export default function AppleSignUp() {
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/apple", "_self");
  };

  return (
    <div className={classes.appleSignUp} onClick={handleClick}>
      <p className={classes.logo}>
        <img src={AppleIcon} width="20px" />
      </p>{" "}
      Sign up with Apple
    </div>
  );
}
