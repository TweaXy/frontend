import React, { useEffect, useState } from 'react';
import Headerclasses from './WelcomePageStyle/Header.module.css';
import Posterclasses from './WelcomePageStyle/PosterImage.module.css';
import backgroundImage from '../../../assets/logo.svg';
import welcomePage from './WelcomePageStyle/WelcomePage.module.css';
import XLogo from '../../../assets/logo.ico';
import SignUpButton from '../../components/Buttons/SignUpButton';
import SignInButton from '../../components/Buttons/SignInButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
    const [isSignUpWindowOpen, setIsSignUpWindowOpen] = useState(false);
    const [isSignInWindowOpen, setIsSignInWindowOpen] = useState(false);

    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const navigate = useNavigate();

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

    useEffect(() => {
        if (user && token) {
            navigate('/home');
        }
    }, [user, token, navigate]);

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
