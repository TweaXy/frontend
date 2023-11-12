import { TextField } from "@mui/material";
import "./SignUpPage.css";

const create = "Create your account";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SignUpPage3 = ({ Data1, Data2, EditInformation, nextWindowHandler }) => {
  const dateval = months[Data2.month] + " " + Data2.day + "," + Data2.year;
  return (
    <div className="sign-up-page-body">
      <h1>{create}</h1>
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          name="username"
          label="Username"
          value={Data1.username}
          onClick={EditInformation}
        />
      </div>
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          name="usermail"
          label="Email"
          value={Data1.usermail}
          onClick={EditInformation}
        />
      </div>
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          label="Name"
          name="name"
          value={Data1.name}
          onClick={EditInformation}
        />
      </div>
      <div className="sign-up-uuid-field">
        <TextField
          className="sign-up-uuid-field"
          variant="outlined"
          id="outlined-basic"
          label="Date"
          value={dateval}
          onClick={EditInformation}
        />
      </div>
      <button className="black-wide-button" onClick={nextWindowHandler}>
        Next
      </button>
    </div>
  );
};

export default SignUpPage3;
