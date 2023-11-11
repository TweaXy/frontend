import { useState, useEffect } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import Signup1 from "./signup1";
import SignUp2 from "./Signup2";
import Signup3 from "./Signup3";
import SignUp4 from "./Signup4";
import SignUp5 from "./Signup5";
import { sendEmailVerification } from "../apis/EmailVerfication";
import { signup } from "../apis/Signup";
const Errors = {
  Email: "",
  Username: "",
  Password:
    "Password must contain 8 or more characters with at least one of: uppercase, lowercase, number and special",
  Verficationcode: "",
  Signup: "",
};
const Finish = "You Are A Tweexy User Now";
const LoginWindow = ({ onClose }) => {
  const [windowOpened, setwindowOpned] = useState(0);
  const [Data1, changeData1] = useState({ username: "", usermail: "" });
  const [Data2, changeData2] = useState({ day: "", month: "", year: "" });
  const [password, setpassword] = useState("");
  const [verficationcode, setverficationcode] = useState("");
  const [canbeuser, setcanbeuser] = useState(true);
  const nextWindowHandler = (ev) => {
    // ev.preventDefault();
    if (windowOpened === 2) {
      sendEmailVerification(Data1.usermail);
    }
    if (windowOpened === 4) {
      signup(
        Data1.usermail,
        Data1.username,
        "Manga",
        Data2,
        password,
        verficationcode,
        setcanbeuser
      );
    }
    if (canbeuser===true) setwindowOpned(windowOpened + 1);
  };
  const passwordhandler = (ev) => {
    setpassword(ev.target.value);
    setcanrender(true);
  };
  const EditInformation = () => {
    setwindowOpned(windowOpened - 2);
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
        {windowOpened === 0 && (
          <Signup1
            nextWindowHandler={nextWindowHandler}
            Data1={Data1}
            changeData1={changeData1}
            Data2={Data2}
            changeData2={changeData2}
          />
        )}
        {windowOpened === 1 && (
          <SignUp2 nextWindowHandler={nextWindowHandler} />
        )}
        {windowOpened === 2 && (
          <Signup3
            Data1={Data1}
            Data2={Data2}
            EditInformation={EditInformation}
            nextWindowHandler={nextWindowHandler}
          />
        )}
        {windowOpened === 3 && (
          <SignUp4
            verficationcode={verficationcode}
            setverficationcode={setverficationcode}
            Data1={Data1}
            nextWindowHandler={nextWindowHandler}
          />
        )}
        {windowOpened === 4 && (
          <SignUp5
            canbeuser={canbeuser}
            password={password}
            passwordhandler={passwordhandler}
            nextWindowHandler={nextWindowHandler}
          />
        )}
      </div>
    </div>
  );
};
export { LoginWindow as default, Errors };
