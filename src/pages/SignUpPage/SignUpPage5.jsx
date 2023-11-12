import "./SignUpPage.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";

const SignUpPage5 = ({
  canbeuser,
  password,
  passwordhandler,
  nextWindowHandler,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [isOKPass, setisOKPass] = useState(true);
  const pass = "You'll need a password";
  const P3 = "Step 5 of 5";
  const p2 = "Make sure it’s 8 characters or more.";
  // useEffect(() => {
  //   if (password.length > 3) isAcceptebalePass(password, setisOKPass);
  // }, [password]);
  return (
    <div className="sign-up-page-body">
      <h1 style={{ marginTop: "-100px" }}>You'll need a password</h1>
      <FormControl
        sx={{
          m: 1,
          width: "100%",
          height: "62px",
          maxWidth: "440px",
          marginTop: "50px"
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={passwordhandler}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <button
        className="black-wide-button"
        onClick={nextWindowHandler}
        disabled={!isOKPass}
        style={{ background: isOKPass ? "black" : "gray", marginTop: "220px", marginBottom: "-100px" }}
      >
        Next
      </button>
    </div>
  );
};

export default SignUpPage5;
