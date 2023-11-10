import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import React from "react";
import { isAcceptebalePass } from "../apis/Email";
import { Errors } from "./FloatingWindow";
const SignUp5 = ({ password, passwordhandler, nextWindowHandler }) => {
  const [isOKPass, setisOKPass] = useState(false);
  const pass = "You'll need a password";
  const P3 = "Step 5 of 5";
  const p2 = "Make sure it’s 8 characters or more.";
  useEffect(
    function Check_Password() {
      console.log(isOKPass);
      isAcceptebalePass(password, setisOKPass);
      console.log(isOKPass);
    },
    [password]
  );
  return (
    <>
      <p className="p3">{P3}</p>
      <div className="pass">
        <h2 className="signup-header">{pass}</h2>
      </div>
      <div>
        <p
          style={{
            marginTop: "100px",
            marginRight: "160px",
            fontSize: "15px",
          }}
        >
          {p2}
        </p>
      </div>
      <form onSubmit={nextWindowHandler}>
        <div className="input-container">
          <input
            type="password"
            style={{ marginTop: "50px" }}
            className={`signup-input ${!isOKPass ? "error-border" : ""}`}
            placeholder="Password"
            value={password}
            onChange={passwordhandler}
          ></input>
          {!isOKPass && <p className="error-message">{Errors["Password"]}</p>}
        </div>
        <button
          className="Button"
          disabled={!isOKPass}
          style={{
            backgroundColor: isOKPass ? "black" : "gray",
            marginTop: "220px",
          }}
        >
          {" "}
          Next
        </button>
      </form>
    </>
  );
};
export default SignUp5;
