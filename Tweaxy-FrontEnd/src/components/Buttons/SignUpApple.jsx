import React from "react";
import classes from "./SignUpApple.module.css";
import AppleIcon from "../../assets/AppleLogo.png";
const AppleSignUp = (props) => {
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/apple", "_self");
  };

  return (
    <div
      className={classes.appleSignUp}
      style={props.style}
      onClick={handleClick}
    >
      <p className={classes.logo}>
        <img src={AppleIcon} alt="AppleIcon" width="20px" />
      </p>{" "}
      {props.content}
    </div>
  );
};

export default AppleSignUp;
