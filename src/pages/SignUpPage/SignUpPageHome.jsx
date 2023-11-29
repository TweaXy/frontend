import { useState } from 'react';
import LoginWindowHeader from '../../components/LoginWindowHeader/LoginWindowHeader';
import SignUpPageuserName from './SignUpPageUName';
import SignUpPageAvater from './SignUpPageAvater';
const SignUpHome = ({ onClose, UN }) => {
    const [window, setwidnow] = useState(0);
    const next_Handler = () => {
        if (window === 1) {
            onClose();
        }
        setwidnow(window + 1);
    };
    return (
        <>
            <div className="sign-up-page-container">
                <LoginWindowHeader onClose={onClose} />
                {window === 0 && (
                    <SignUpPageuserName next_Handler={next_Handler} UN={UN} />
                )}
                {window === 1 && (
                    <SignUpPageAvater next_Handler={next_Handler} />
                )}
            </div>
        </>
    );
};
export default SignUpHome;
