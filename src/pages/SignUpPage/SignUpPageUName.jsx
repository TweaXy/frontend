import { useState } from 'react';
import './SignUpHome.css';
import { TextField } from '@mui/material';
const UN = 'What should we call you?';
const uniq = 'Your @username is unique. You can always change it later.';
import UsernameUpdate from '../../apis/Usernameupdate';
const SignUpPageuserName = ({ next_Handler, UN }) => {
    const [username, setusername] = useState('');
    const usernameHandler = (ev) => {
        setusername(ev.target.value);
    };
    const clickHandler = () => {
        // UsernameUpdate(username);
        console.log('dsa');
        next_Handler();
    };
    return (
        <>
            <div className="sign-up-homepage-body">
                <h1>{UN}</h1>
                <p>{uniq}</p>
                <div className="sign-up-homepage-uuid-field">
                    <TextField
                        className="sign-up-homepage-uuid-field"
                        variant="outlined"
                        id="outlined-basic"
                        label="Username"
                        placeholder={UN}
                        value={username}
                        onChange={usernameHandler}
                    />
                </div>
                <button
                    className="Hp-black-wide-button"
                    type="submit"
                    onClick={clickHandler}
                >
                    {username.length > 0 ? 'Update' : 'Skip for now'}
                </button>
            </div>
        </>
    );
};
export default SignUpPageuserName;
