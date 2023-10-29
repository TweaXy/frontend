import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./buttonsStyle/NextToTrack.module.css";

export default function NextToTrack() {
  return (
    <div>
      <NavLink to="/TrackOption" style={{ textDecoration: "none" }}>
        <div className={classes.buttonNext}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
}
