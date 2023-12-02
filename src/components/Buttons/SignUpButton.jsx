import React from 'react';
import classes from './buttonsStyle/ButtonSignUp.module.css';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import MainPageSelectors from '../../shared/selectors/MainPage';

function SignUpButton({ isWindowOpen, openWindow, onClose }) {
    return (
        <>
            <button
                data-test={MainPageSelectors.SIGN_UP}
                className={classes.ButtonSignUp}
                onClick={openWindow}
            >
                Create account
            </button>
            {isWindowOpen && <SignUpPage onClose={onClose} />}
        </>
    );
}
export default SignUpButton;
