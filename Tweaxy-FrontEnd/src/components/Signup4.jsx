import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import classes2 from "./ComponentsStyles/PhoneVerify.module.css";
import React from "react";
import { checkEmailVerification } from "../apis/EmailVerfication";
import { Errors } from "./FloatingWindow";
const SignUp4 = ({ Data1, nextWindowHandler }) => {
  const [verficationcode, setverficationcode] = useState("");
  const [iscompleteverficationcode, setiscompleteverficationcode] =
    useState(false);
  const [isokverficationcode, setisokverficationcode] = useState(true);
  const verficationcodehandler = (ev) => {
    setverficationcode(ev.target.value);
  };
  useEffect(
    function checkverficationcode() {
      const verficationcodeok = verficationcode.length === 8;
      setiscompleteverficationcode(verficationcodeok);
    },
    [verficationcode]
  );
  const onclickHandler = () => {
    checkEmailVerification(
      Data1.usermail,
      verficationcode,
      setisokverficationcode,
      nextWindowHandler
    );
  };
  const p3 = "Step 4 of 5";
  return (
    <div>
      <p className="p3">{p3}</p>
      <div className={classes2.container}>
        <div className={classes2.Minor}>
          <p>We sent you a code</p>
        </div>
        <div className={classes2.Minor3}>
          Enter it below to verify {Data1.usermail}.
        </div>
        <div className="input-container">
          <input
            className={`input-verfication ${
              !isokverficationcode ? "error-border" : ""
            }`}
            type="text"
            placeholder="verfication code"
            value={verficationcode}
            onChange={verficationcodehandler}
          />
          {!isokverficationcode && (
            <p className="error-message">{Errors["Verficationcode"]}</p>
            )}
        </div>
        <div className={classes2.Minor4}>Didn't receive email?</div>
      </div>
      <button
        className="Button"
        disabled={!iscompleteverficationcode}
        style={{
          marginTop: "215px",
          backgroundColor: iscompleteverficationcode ? "black" : "gray",
        }}
        onClick={onclickHandler}
      >
        {" "}
        Next
      </button>
    </div>
  );
};
export default SignUp4;
