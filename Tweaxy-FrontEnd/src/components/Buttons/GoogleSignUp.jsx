import React, { useContext } from "react";
import classes from "./buttonsStyle/GoogleSignUp.module.css";
import googleLogo from "../../assets/googleLogo.png";

const GoogleSignUp = (props) => {
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/google", "_self");
  };

  return (
    <div
      className={classes.googleSignUp}
      style={props.style}
      onClick={handleClick}
    >
      <p className={classes.logo}>
        <img src={googleLogo} alt="GoogleLogo" width="20px" />
      </p>{" "}
      {props.content}
    </div>
  );
};

export default GoogleSignUp;
