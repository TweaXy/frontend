import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import classes2 from "./ComponentsStyles/PhoneVerify.module.css";
import React from "react";
import EmailVerfication from "../apis/EmailVerfication";
const SignUp4 = ({ Data1, nextWindowHandler }) => {
  const [verficationcode, setverficationcode] = useState("");
  const [iscompleteverficationcode, setiscompleteverficationcode] =
    useState(false);
  const verficationcodehandler = (ev) => {
    setverficationcode(ev.target.value);
  };
  useEffect(
    function checkverficationcode() {
      const verficationcodeok = verficationcode.length === 6;
      setiscompleteverficationcode(verficationcodeok);
    },
    [verficationcode]
  );
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
        <input
          className="input-verfication"
          type="text"
          placeholder="verfication code"
          value={verficationcode}
          onChange={verficationcodehandler}
        />
        <div className={classes2.Minor4}>Didn't receive email?</div>
      </div>

      <button
        className="Button"
        disabled={!iscompleteverficationcode}
        style={{
          marginTop: "215px",
          backgroundColor: iscompleteverficationcode ? "black" : "gray",
        }}
        onClick={nextWindowHandler}
      >
        {" "}
        Next
      </button>
    </div>
  );
};
export default SignUp4;
