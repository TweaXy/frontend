import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import React from "react";
const SignUp5 = ({ password, passwordhandler, nextWindowHandler }) => {
  const [iscompletepass, setiscompletepass] = useState(false);
  const pass = "You'll need a password";
  const P3 = "Step 5 of 5";
  const p2 = "Make sure it’s 8 characters or more.";
  useEffect(
    function Check_Password() {
      const ispassok = password.length >= 8 ? true : false;
      setiscompletepass(ispassok);
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
        <input
          type="password"
          style={{ marginTop: "50px" }}
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={passwordhandler}
        ></input>
        <button
          className="Button"
          disabled={!iscompletepass}
          style={{
            backgroundColor: iscompletepass ? "black" : "gray",
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
