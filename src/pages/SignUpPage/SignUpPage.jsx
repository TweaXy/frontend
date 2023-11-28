import { useState } from "react";

import SignUpPage1 from "./SignUpPage1";
import SignUpPage3 from "./SignUpPage3";
import SignUpPage4 from "./SignUpPage4";
import SignUpPage5 from "./SignUpPage5";
import CaptchaPage from "./CaptchaPage";
import LoginWindowHeader from "../../components/LoginWindowHeader/LoginWindowHeader";

import { sendEmailVerification } from "../../apis/EmailVerfication";
import { signup } from "../../apis/Signup";
import { useNavigate } from "react-router-dom";

const Errors = {
  Email: "",
  Username: "",
  Password:
    "Password must contain 8 or more characters with at least one of: uppercase, lowercase, number and special",
  Verficationcode: "",
  Signup: "",
};

const SignUpPage = ({ onClose }) => {
  const [windowOpened, setwindowOpned] = useState(0);

  const [Data1, changeData1] = useState({ username: "", usermail: "",name:"" });
  const [Data2, changeData2] = useState({ day: "", month: "", year: "" });

  const [password, setpassword] = useState("");
  const [canbeuser, setcanbeuser] = useState(true);
  const [verficationcode, setverficationcode] = useState("");

  const navigate = useNavigate();

  const nextWindowHandler = (ev) => {
    // ev.preventDefault();
    if (windowOpened === 2) {
      sendEmailVerification(Data1.usermail);
    }
    if (windowOpened === 3) {
      signup(
        Data1.usermail,
        Data1.username,
        Data1.name,
        Data2,
        password,
        verficationcode,
      );
      navigate("home");
    }
    setwindowOpned(windowOpened + 1);
  };

  const passwordhandler = (ev) => {
    setpassword(ev.target.value);
    // setcanrender(true);
  };

  const EditInformation = () => {
    setwindowOpned(windowOpened - 1);
  };

  return (
    <div className="sign-up-page-container">
      <LoginWindowHeader onClose={onClose} />
      {windowOpened === 0 && (
        <SignUpPage1
          nextWindowHandler={nextWindowHandler}
          Data1={Data1}
          changeData1={changeData1}
          Data2={Data2}
          changeData2={changeData2}
        />
      )}
      {windowOpened === 1 && (
        <SignUpPage3
          Data1={Data1}
          Data2={Data2}
          EditInformation={EditInformation}
          nextWindowHandler={nextWindowHandler}
        />
      )}
      
      {windowOpened === 2 && (
        <CaptchaPage
          
          nextWindowHandler={nextWindowHandler}
        />
      )}
      {windowOpened === 3 && (
        <SignUpPage4
          verficationcode={verficationcode}
          setverficationcode={setverficationcode}
          Data1={Data1}
          nextWindowHandler={nextWindowHandler}
        />
      )}
      {windowOpened === 4 && (
        <SignUpPage5
          canbeuser={canbeuser}
          password={password}
          passwordhandler={passwordhandler}
          nextWindowHandler={nextWindowHandler}
        />
      )}
    </div>
  );
};

export { SignUpPage as default, Errors };
