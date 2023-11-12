import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import TextField from '@mui/material/TextField';
import React from "react";
import BirthDate from "./BirthDate";
const create = "Create your account";
const p1 =
  "This will not be shown publicly. Confirm your own age, even if this";
const p2 = "account is for a business, a pet, or something else.";
const p3 = "Step 1 of 5";
const date = "Date of birth";
import { isUniqeEmail, isUniqueUsername } from "../apis/Email";
import { Errors } from "./FloatingWindow";
const Signup1 = ({
  nextWindowHandler,
  Data1,
  changeData1,
  Data2,
  changeData2,
}) => {
  const [iscomplete, setiscomplete] = useState(false);
  const [uniqueEmail, setuniqueEmail] = useState(false);
  const [uniqueusername, setisuniqueusername] = useState(false);
  useEffect(
    function checkEmailUniqness() {
      console.log(uniqueEmail);
      isUniqeEmail(Data1.usermail, setuniqueEmail);
    },
    [Data1.usermail]
  );
  useEffect(
    function checkUsernameUniqness() {
      console.log(uniqueusername);
      isUniqueUsername(Data1.username, setisuniqueusername);
    },
    [Data1.username]
  );
  useEffect(
    function Check_Information() {
      isUniqeEmail(Data1.usermail);
      isUniqueUsername(Data1.username);
      const isdata1ok = Data1.username && Data1.usermail;
      const isdata2ok = Data2.day && Data2.month && Data2.year;
      setiscomplete(isdata1ok && isdata2ok && uniqueEmail && uniqueusername);
    },
    [Data1, Data2]
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
  return (
    <>
      <p className="p3">{p3}</p>
      <h2 className="signup-header">{create}</h2>
      <form onSubmit={nextWindowHandler}>
        <div className="input-container">
          <input
            className={`signup-input ${!uniqueusername ? "error-border" : ""}`}
            type="text"
            placeholder="Name"
            value={Data1.username}
            onChange={Data1_Handler}
            name="username"
          />
          {!uniqueusername && (
            <p className="error-message">{Errors["Username"]}</p>
          )}
        </div>
        <div className="input-container">
          <input
            className={`signup-input ${!uniqueEmail ? "error-border" : ""}`}
            type="text"
            placeholder="Email"
            value={Data1.usermail}
            onChange={Data1_Handler}
            name="usermail"
          />
          {!uniqueEmail && <p className="error-message">{Errors["Email"]}</p>}
        </div>
        <div className="signup-date">
          <h4>{date}</h4>
          <p>{p1}</p>
          <p>{p2}</p>
          <BirthDate
            Data2={Data2}
            changeData2={changeData2}
            Data2_Handler={Data2_Handler}
          />
        </div>
        <button
          type="submit"
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
export default Signup1;
