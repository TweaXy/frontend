import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./buttonsStyle/NextButton.module.css";

export default function NextButton() {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className={classes.buttonNext}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
}
