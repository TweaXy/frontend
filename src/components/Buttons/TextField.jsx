import { TextField } from "@mui/material";
import "./buttonsStyle/TextField.css"
const LoginTextField = ({ value, label, onChange }) => (
  <TextField
    className="login-text-field"
    id="outlined-basic"
    variant="outlined"
    label={label}
    value={value}
    onChange={onChange}
  />
);

export default LoginTextField;