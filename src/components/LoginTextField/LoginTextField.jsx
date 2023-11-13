import { TextField } from "@mui/material";
import "./LoginTextField.css";

const LoginTextField = ({ value, label,data_test, onChange }) => (
  <TextField
    className="login-text-field"
    data-test={data_test}
    id="outlined-basic"
    variant="outlined"
    label={label}
    value={value}
    onChange={onChange}
  />
);

export default LoginTextField;
