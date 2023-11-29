import { useState, useEffect } from 'react';
import './SignUpHome.css';
import { isUniqueUsername } from '../../apis/Email';
import { TextField } from '@mui/material';
import { Errors } from './SignUpPage';
const UN = 'What should we call you?';
const uniq = 'Your @username is unique. You can always change it later.';
import UsernameUpdate from '../../apis/Usernameupdate';
const SignUpPageuserName = ({ next_Handler, UN }) => {
    const [username, setusername] = useState('');
    const usernameHandler = (ev) => {
        setusername(ev.target.value);
    };
    const [uniqueusername, setisuniqueusername] = useState(true);
    useEffect(
        function checkUsernameUniqness() {
            if (username.length > 0) {
                isUniqueUsername(username, setisuniqueusername);
            } else setisuniqueusername(true);
        },
        [username]
    );
    const clickHandler = () => {
        UsernameUpdate(username);
        next_Handler();
    };
    return (
        <>
            <div className="sign-up-homepage-body">
                <h1>What should we call you?</h1>
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
                {!uniqueusername && (
                    <p className="error-message">{Errors['Username']}</p>
                )}
                <button
                    className="Hp-black-wide-button"
                    type="submit"
                    onClick={clickHandler}
                    style={{
                        background:
                            username.length > 3 && uniqueusername
                                ? 'black'
                                : 'white',
                        color:
                            username.length > 3 && uniqueusername
                                ? 'white'
                                : 'black',
                        fontWeight: 'bold' || '700',
                    }}
                >
                    {username.length > 3 && uniqueusername
                        ? 'Next'
                        : 'Skip for now'}
                </button>
            </div>
        </>
    );
};
export default SignUpPageuserName;
