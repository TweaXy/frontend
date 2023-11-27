import { useState } from 'react';
import './SignUpHome.css';
import { TextField } from '@mui/material';
import Setavatar from './Avater';
const UN = 'Pick a profile picture';
const uniq = 'Have a favorite selfie? Upload it now.';
const SignUpPageAvater = ({ next_Handler }) => {
    return (
        <>
            <div className="sign-up-homepage-body">
                <h1>{UN}</h1>
                <p>{uniq}</p>
                <Setavatar />
                <button
                    className="Hp-black-wide-button"
                    type="submit"
                    // onClick={clickHandler}
                >
                    Next
                </button>
            </div>
        </>
    );
};
export default SignUpPageAvater;
