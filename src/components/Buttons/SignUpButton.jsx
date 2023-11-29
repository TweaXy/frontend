import React from 'react';
import classes from './buttonsStyle/ButtonSignUp.module.css';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';

function SignUpButton({ isWindowOpen, openWindow, onClose }) {
    return (
        <>
            <button className={classes.ButtonSignUp} onClick={openWindow}>
                Create account
            </button>
            {isWindowOpen && <SignUpPage onClose={onClose} />}
        </>
    );
}
export default SignUpButton;
