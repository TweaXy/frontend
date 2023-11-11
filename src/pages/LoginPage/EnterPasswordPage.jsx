import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./LoginPage.css";

const EnterPasswordPage = ({
  UUID,
  password,
  handlePasswordChange,
  handlePasswordSubmit,
  handleForgotPassword,
  handleSignUp,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page-body">
      <h1>Enter your password</h1>
      <TextField
        id="outlined-disabled"
        label="UUID"
        value={UUID}
        disabled
        InputProps={{
          style: {
            background: "#dcdcdc",
          },
        }}
        sx={{
          m: 1,
          width: "100%",
          maxWidth: "440px",
          height: "80px",
        }}
        variant="outlined"
      />
      <FormControl
        sx={{
          m: 1,
          width: "100%",
          height: "80px",
          maxWidth: "440px",
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
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
      <button className="black-wide-button" onClick={handlePasswordSubmit}>
        Login
      </button>
      <button className="white-wide-button" onClick={handleForgotPassword}>
        Forgot password?
      </button>
      <p>
        Don't have an account? <a onClick={handleSignUp}>Sign up</a>
      </p>
    </div>
  );
};

export default EnterPasswordPage;
