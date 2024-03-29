import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./buttonsStyle/SkipButton.module.css";

export default function SkipButton() {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className={classes.buttonNext}>
          <p className={classes.content}>Skip</p>
        </div>
      </NavLink>
    </div>
  );
}
