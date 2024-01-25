import React from "react";
import classes from "./ButtonSignUp.module.css";
import { NavLink } from "react-router-dom";

export default function NextToPhone() {
  return (
    <div className={classes.container}>
      <NavLink to="/AddPhone" className={classes.navLink}>
        <div className={classes.buttonSignUp}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
}
