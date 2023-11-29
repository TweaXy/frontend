import React from 'react';
import classes from './buttonsStyle/SignInButton.module.css';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPageSelectors from '../../shared/selectors/MainPage';

export default function SignInButton({
    isWindowOpen,
    openWindow,
    onClose,
    openSignUpWindow,
}) {
    return (
        <div className={classes.container}>
            <p className={classes.heading}>Already have an account?</p>
            <button
                data-test={MainPageSelectors.SIGN_IN}
                className={classes.buttonSignIn}
                onClick={openWindow}
            >
                Sign in
            </button>
            {isWindowOpen && (
                <LoginPage
                    onClose={onClose}
                    openSignUpWindow={openSignUpWindow}
                />
            )}
        </div>
    );
}
