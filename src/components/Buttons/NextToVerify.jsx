import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./buttonsStyle/NextToVerify.module.css";

export default function NextToVerify() {
  return (
    <div>
      <NavLink to="/phoneVerify" style={{ textDecoration: "none" }}>
        <div className={classes.buttonNext}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
}
