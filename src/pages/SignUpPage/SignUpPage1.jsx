import { useState, useEffect } from "react";
import "./SignUpPage.css";
import { MenuItem, TextField } from "@mui/material";
import { isUniqeEmail, isUniqueUsername } from "../../apis/Email";
import { Errors } from "./SignUpPage";

const p3 = "Step 1 of 5";
const date = "Date of birth";
const create = "Create your account";

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
const years = Array.from({ length: 121 }, (_, i) => 2023 - i);

const SignUpPage1 = ({
  nextWindowHandler,
  Data1,
  changeData1,
  Data2,
  changeData2,
}) => {
  const [iscomplete, setiscomplete] = useState(false);
  const [uniqueEmail, setuniqueEmail] = useState(true);
  const [uniqueusername, setisuniqueusername] = useState(true);
  useEffect(
    function checkEmailUniqness() {
      if (Data1.usermail.length > 0) {
        isUniqeEmail(Data1.usermail, setuniqueEmail);
      } else setuniqueEmail(true);
    },
    [Data1.usermail]
  );
  useEffect(
    function checkUsernameUniqness() {
      if (Data1.username.length > 0) {
        isUniqueUsername(Data1.username, setisuniqueusername);
      } else setisuniqueusername(true);
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
  return (
    <div className="sign-up-page-body">
      {/* <p>{p3}</p> */}
      <h1>{create}</h1>
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          name="username"
          label="Username"
          value={Data1.username}
          onChange={Data1_Handler}
        />
      </div>
      {!uniqueusername && <p className="error-message">{Errors["Username"]}</p>}
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          name="usermail"
          label="Email"
          value={Data1.usermail}
          onChange={Data1_Handler}
        />
      </div>
      {!uniqueEmail && <p className="error-message">{Errors["Email"]}</p>}
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          label="Name"
          name="name"
          value={Data1.name}
          onChange={Data1_Handler}
        />
      </div>
      <span className="sign-up-span">{date}</span>
      <div className="sign-up-birth-date">
        <TextField
          className="sign-up-birth-date-selection"
          id="outlined-select-currency"
          select
          label="Month"
          defaultValue="Select Month"
          name="month"
          value={Data2.month}
          onChange={Data2_Handler}
          sw={{
            width: "300px",
          }}
        >
          {months.map((month) => (
            <MenuItem key={month.value} value={month.value}>
              {month.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="sign-up-birth-date-selection"
          id="outlined-select-currency"
          select
          label="Day"
          defaultValue="Select Day"
          name="day"
          value={Data2.day}
          onChange={Data2_Handler}
          sw={{
            width: "300px",
          }}
        >
          {Render_Days().map((day) => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="sign-up-birth-date-selection"
          id="outlined-select-currency"
          select
          label="Year"
          name="year"
          defaultValue="Select Year"
          value={Data2.year}
          onChange={Data2_Handler}
          sw={{
            width: "300px",
          }}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>{" "}
      </div>
      <button
        onClick={nextWindowHandler}
        className="black-wide-button"
        type="submit"
        disabled={!iscomplete}
        style={{ background: iscomplete ? "black" : "gray", marginTop: "25px" }}
      >
        Next
      </button>
    </div>
  );
};

export default SignUpPage1;
