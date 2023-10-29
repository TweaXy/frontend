import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./buttonsStyle/ButtonSignUp.module.css";
export default function SignUpButton() {
  const handleClick = () => {
    return <NavLink to="/Mail" className={classes.navLink}></NavLink>;
  };
  return (
    <div>
      <NavLink to="/Mail" style={{ textDecoration: "none" }}>
        <div className={classes.ButtonSignUp} onClick={handleClick}>
          Sign up
        </div>
      </NavLink>
    </div>
  );
}
