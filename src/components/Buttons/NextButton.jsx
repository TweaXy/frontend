import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./buttonsStyle/NextButton.module.css";
import SignInButton from "./SignInButton";
import SignInSelectors from "../../shared/selectors/SignIn";

export default function NextButton() {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div data-test={SignInSelectors.NEXT_BUTTON} className={classes.buttonNext}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
}
