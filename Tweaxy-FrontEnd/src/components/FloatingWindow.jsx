import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import classes from "./buttons/buttonsStyle/ButtonSignUp.module.css";
import classes2 from "./ComponentsStyles/PhoneVerify.module.css";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";
const LoginWindow = ({ onClose }) => {
  const [windowOpened, setwindowOpned] = useState(0);
  const nextWindowHandler = () => {
    if (windowOpened === 4) {
      return;
    }
    setwindowOpned(windowOpened + 1);
  };
  const create = "Create your account";
  const p1 =
    "This will not be shown publicly. Confirm your own age, even if this";
  const p2 = "account is for a business, a pet, or something else.";
  const p3 = "Step 1 of 5";
  const date = "Date of birth";
  const [Data1, changeData1] = useState({ username: "", usermail: "" });
  const [Data2, changeData2] = useState({ day: "", month: "", year: "" });
  const [iscomplete, setiscomplete] = useState(false);
  const [ischecked, setischecked] = useState(false);
  const [password, setpassword] = useState("");
  const [iscompletepass, setiscompletepass] = useState(false);
  const [verficationcode, setverficationcode] = useState("");
  const [iscompleteverficationcode, setiscompleteverficationcode] =
    useState(false);
  const verficationcodehandler = (ev) => {
    setverficationcode(ev.target.value);
  };
  useEffect(
    function Check_Information() {
      const verficationcodeok = verficationcode.length === 6;
      setiscompleteverficationcode(verficationcodeok);
    },
    [verficationcode]
  );
  const passwordhandler = (ev) => {
    setpassword(ev.target.value);
  };
  const CheckboxHandler = () => {
    setischecked(!ischecked);
  };
  const EditInformation = () => {
    setwindowOpned(windowOpened - 2);
  };
  useEffect(
    function Check_Information() {
      const isdata1ok = Data1.username && Data1.usermail;
      const isdata2ok = Data2.day && Data2.month && Data2.year;
      setiscomplete(isdata1ok && isdata2ok);
    },
    [Data1, Data2]
  );
  useEffect(
    function Check_Password() {
      const ispassok = password.length >= 8 ? true : false;
      setiscompletepass(ispassok);
    },
    [password]
  );
  const Data1_Handler = (evt) => {
    const changedelement = evt.target.name;
    const newvalue = evt.target.value;
    changeData1((cur) => {
      cur[changedelement] = newvalue;
      return { ...cur };
    });
  };
  const Data2_Handler = (evt) => {
    const changedelement = evt.target.name;
    const newvalue = evt.target.value;
    changeData2((cur) => {
      cur[changedelement] = newvalue;
      return { ...cur };
    });
  };
  const Render_Days = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    if (
      Data2.month === "4" ||
      Data2.month === "6" ||
      Data2.month === "9" ||
      Data2.month === "11"
    ) {
      return days.filter((day) => day !== 31);
    } else if (Data2.month === "2") {
      const isLeapYear =
        (Data2.year % 4 === 0 && Data2.year % 100 !== 0) ||
        Data2.year % 400 === 0;
      return isLeapYear ? days.slice(0, 29) : days.slice(0, 28);
    }
    return days;
  };
  const Render_Months = () => {
    const months = [
      { name: "January", value: "1" },
      { name: "February", value: "2" },
      { name: "March", value: "3" },
      { name: "April", value: "4" },
      { name: "May", value: "5" },
      { name: "June", value: "6" },
      { name: "July", value: "7" },
      { name: "August", value: "8" },
      { name: "September", value: "9" },
      { name: "October", value: "10" },
      { name: "November", value: "11" },
      { name: "December", value: "12" },
    ];
    return months.map((month) => (
      // key,value is a must for proper rendering
      <option key={month.value} value={month.name}>
        {month.name}
      </option>
    ));
  };
  const Render_Years = () => {
    const years = Array.from({ length: 121 }, (_, i) => 2023 - i);
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };
  const signUp1 = () => {
    return (
      <>
        <p className="p3">{p3}</p>
        <h2 className="signup-header">{create}</h2>
        <form onSubmit={nextWindowHandler}>
          <input
            className="signup-input"
            type="text"
            placeholder="Name"
            value={Data1.username}
            onChange={Data1_Handler}
            name="username"
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Email"
            value={Data1.usermail}
            onChange={Data1_Handler}
            name="usermail"
          />
          <div className="signup-date">
            <h4>{date}</h4>
            <p>{p1}</p>
            <p>{p2}</p>
            <div className="twitter-date-picker">
              <div className="dropdown">
                <select
                  value={Data2.month}
                  onChange={Data2_Handler}
                  name="month"
                  style={{ width: "200px" }}
                >
                  <option value="" disabled hidden>
                    Month
                  </option>
                  {Render_Months()}
                </select>
              </div>
              <div className="dropdown">
                <select
                  value={Data2.day}
                  onChange={Data2_Handler}
                  name="day"
                  style={{ width: "90px" }}
                >
                  <option value="" disabled hidden>
                    Day
                  </option>
                  {Render_Days().map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dropdown">
                <select
                  value={Data2.year}
                  onChange={Data2_Handler}
                  name="year"
                  style={{ width: "120px" }}
                >
                  <option value="" disabled hidden>
                    Year
                  </option>
                  {Render_Years()}
                </select>
              </div>
            </div>
          </div>
          <button
            className="Button"
            disabled={!iscomplete}
            style={{ backgroundColor: iscomplete ? "black" : "gray" }}
          >
            {" "}
            Next
          </button>
        </form>
      </>
    );
  };
  const signUp2 = () => {
    const Customize = "Customize your experience";
    const Track = "Track where you see Tweaxy content across the web";
    const p1 =
      "Tweaxy uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.";
    const p2 = "Step 2 of 5";
    return (
      <>
        <div className="signup2">
          <p className="p3">{p2}</p>
          <h2 className="Customize">{Customize}</h2>
          <p className="Track">{Track}</p>
          <p className="DataPersonalization">{p1}</p>
          <input
            className="checkBox"
            type="checkbox"
            checked={ischecked}
            onChange={CheckboxHandler}
          />
          <button
            className="Button"
            onClick={nextWindowHandler}
            style={{ backgroundColor: "black", marginTop: "270px" }}
          >
            {" "}
            Next
          </button>
        </div>
      </>
    );
  };
  const signUp3 = () => {
    const p3 = "Step 3 of 5";
    const dateval = Data2.month + " " + Data2.day + "," + Data2.year;
    return (
      <>
        <p className="p3">{p3}</p>
        <h2 className="signup-header">{create}</h2>
        <form onSubmit={nextWindowHandler}>
          <input
            className="signup-input"
            type="text"
            placeholder="Name"
            value={Data1.username}
            onClick={EditInformation}
            name="username"
            id="username"
            style={{ marginLeft: "100px", marginBottom: "30px" }}
          />
          <label htmlFor="username" style={{ marginBottom: "10px" }}>
            UserName
          </label>
          <input
            className="signup-input"
            type="text"
            placeholder="Email"
            value={Data1.usermail}
            onClick={EditInformation}
            name="usermail"
            id="usermail"
            style={{ marginLeft: "100px", marginBottom: "20px" }}
          />
          <label
            htmlFor="usermail"
            style={{ marginLeft: "20px", marginBottom: "20px" }}
          >
            Email
          </label>
          <input
            className="signup-input"
            type="text"
            placeholder="Email"
            value={dateval}
            onClick={EditInformation}
            id="Date"
            style={{ marginLeft: "100px", marginBottom: "19px" }}
          />
          <label htmlFor="Date" style={{ marginLeft: "20px" }}>
            Date
          </label>
          <button
            className="Button"
            onClick={nextWindowHandler}
            style={{ backgroundColor: "#1da1f2", marginTop: "230px" }}
          >
            {" "}
            Sign Up
          </button>
        </form>
      </>
    );
  };
  const signUp4 = () => {
    // return <ReCAPTCHA sitekey="6LfaW-4oAAAAAHnov9oGsQp6wpatrBf9CirNGf--" />;
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
  const signUp5 = () => {
    const pass = "You'll need a password";
    const P3 = "Step 5 of 5";
    const p2 = "Make sure it’s 8 characters or more.";
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
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="login-window">
        <div className="login-window-header">
          <button
            className="login-window-close-button"
            onClick={onClose}
          ></button>
        </div>
        {windowOpened === 0 && signUp1()}
        {windowOpened === 1 && signUp2()}
        {windowOpened === 2 && signUp3()}
        {windowOpened === 3 && signUp4()}
        {windowOpened === 4 && signUp5()}
      </div>
    </div>
  );
};
export default LoginWindow;
