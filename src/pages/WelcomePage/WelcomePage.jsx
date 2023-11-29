import React, { useState } from 'react';
import Privacyclasses from './WelcomePageStyle/PrivacyAndPolicy.module.css';
import Headerclasses from './WelcomePageStyle/Header.module.css';
import Posterclasses from './WelcomePageStyle/PosterImage.module.css';
import backgroundImage from '../../../assets/logo.svg';
import welcomePage from './WelcomePageStyle/WelcomePage.module.css';
import XLogo from '../../../assets/logo.ico';
import SignUpButton from '../../components/Buttons/SignUpButton';
import SignInButton from '../../components/Buttons/SignInButton';

export default function WelcomePage() {
    const [isSignUpWindowOpen, setIsSignUpWindowOpen] = useState(false);
    const [isSignInWindowOpen, setIsSignInWindowOpen] = useState(false);

    const openSignUpWindow = () => {
        setIsSignUpWindowOpen(true);
    };

    const closeSignUpWindow = () => {
        setIsSignUpWindowOpen(false);
    };

    const openSignInWindow = () => {
        setIsSignInWindowOpen(true);
    };

    const closeSignInWindow = () => {
        setIsSignInWindowOpen(false);
    };

    return (
        <React.Fragment>
            <div>
                <div className={welcomePage.loginSection}>
                    <div>
                        <div className={Headerclasses.container}>
                            <img
                                className={Headerclasses.Xlogo}
                                src={XLogo}
                                alt="XLogo"
                            />
                            <h1 className={Headerclasses.heading}>
                                Happening now
                            </h1>
                            <p className={Headerclasses.content}>Join today.</p>
                        </div>
                        <div className={welcomePage.buttonSection}>
                            <SignUpButton
                                isWindowOpen={isSignUpWindowOpen}
                                openWindow={openSignUpWindow}
                                onClose={closeSignUpWindow}
                            />
                            <p className={Privacyclasses.privacyPolicy}>
                                By signing up, you agree to the{' '}
                                <a href="https://twitter.com/en/tos">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="https://twitter.com/en/privacy">
                                    Privacy Policy
                                </a>
                                , including{' '}
                                <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
                                    Cookie Use
                                </a>
                            </p>
                            <SignInButton
                                isWindowOpen={isSignInWindowOpen}
                                openWindow={openSignInWindow}
                                onClose={closeSignInWindow}
                                openSignUpWindow={openSignUpWindow}
                            />
                        </div>
                    </div>
                </div>
                <div className={welcomePage.PosterSection}>
                    <div className={Posterclasses.posterSection}>
                        <img
                            className={Posterclasses.background}
                            src={backgroundImage}
                            alt="TwitterBackground"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
