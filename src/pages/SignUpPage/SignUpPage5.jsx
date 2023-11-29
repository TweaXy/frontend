import './SignUpPage.css';
import './SignUpHome.css';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useEffect } from 'react';
import { isAcceptebalePass } from '../../apis/Email';
import { Errors } from './SignUpPage';
const SignUpPage5 = ({
    canbeuser,
    password,
    passwordhandler,
    nextWindowHandler,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showerror, setshowerror] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [isOKPass, setisOKPass] = useState(true);
    useEffect(() => {
        if (password.length > 3) isAcceptebalePass(password, setisOKPass);
    }, [password]);
    useEffect(() => {
        if (!canbeuser) setshowerror(true);
        else setshowerror(false);
    }, [canbeuser]);
    return (
        <div className="sign-up-page-body">
            <h1>You'll need a password</h1>
            <FormControl
                sx={{
                    m: 1,
                    width: '100%',
                    height: '62px',
                    maxWidth: '440px',
                }}
                variant="outlined"
            >
                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
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
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
                {!isOKPass && (
                    <p className="error-message">{Errors['Password']}</p>
                )}
                {showerror && (
                    <p className="error-message">{Errors['Signup']}</p>
                )}
            </FormControl>
            <button
                className="Hp-black-wide-button"
                onClick={nextWindowHandler}
                disabled={!isOKPass}
                style={{
                    background: isOKPass ? 'black' : 'gray',
                }}
            >
                Next
            </button>
        </div>
    );
};

export default SignUpPage5;
