import React, { useContext } from "react";
import classes from "./buttonsStyle/GoogleSignUp.module.css";
import GithubLogo from "../../assets/githubLogo.png";

export default function GithubSignUp() {
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/google", "_self");
  };

  return (
    <div className={classes.googleSignUp} onClick={handleClick}>
      <p className={classes.logo}>
        <img src={GithubLogo} width="20px" />
      </p>{" "}
      Sign up with Github
    </div>
  );
}
