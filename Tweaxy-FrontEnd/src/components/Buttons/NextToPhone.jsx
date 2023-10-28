import React from "react";
import classes from "./ButtonSignUp.module.css";
import { NavLink } from "react-router-dom";

const NextToPhone = (props) => {
  return (
    <div className={classes.container}>
      <NavLink to="/AddPhone" className={classes.navLink}>
        <div className={classes.buttonSignUp}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NextToPhone;
