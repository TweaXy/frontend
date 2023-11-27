import { useEffect, useState } from 'react';
import '../../components/LoginWindowHeader/LoginWindowHeader.css';
import SignUpPage1 from './SignUpPage1';
import SignUpPage3 from './SignUpPage3';
import SignUpPage4 from './SignUpPage4';
import SignUpPage5 from './SignUpPage5';
import { sendEmailVerification } from '../../apis/EmailVerfication';
import { signup, UN } from '../../apis/Signup';
import { useNavigate } from 'react-router-dom';
const Errors = {
    Email: '',
    Username: '',
    Password:
        'Password must contain 8 or more characters with at least one of: uppercase, lowercase, number and special',
    Verficationcode: '',
    Signup: '',
};

const SignUpPage = ({ onClose }) => {
    const [windowOpened, setwindowOpned] = useState(0);
    const [navg, setnavg] = useState(false);
    const [Data1, changeData1] = useState({
        username: '',
        usermail: '',
        name: '',
    });
    const [Data2, changeData2] = useState({ day: '', month: '', year: '' });
    const [password, setpassword] = useState('');
    const [canbeuser, setcanbeuser] = useState(true);
    const [verficationcode, setverficationcode] = useState('');
    const navigate = useNavigate();
    useEffect(
        function handleNavigation() {
            if (navg) navigate(`home/${UN}`);
        },
        [navg]
    );
    const nextWindowHandler = (ev) => {
        // ev.preventDefault();
        if (windowOpened === 1) {
            sendEmailVerification(Data1.usermail);
        }
        if (windowOpened === 3) {
            signup(
                Data1.usermail,
                'MoMangaManga',
                Data1.username,
                Data2,
                password,
                verficationcode,
                setcanbeuser,
                canbeuser,
                setwindowOpned,
                windowOpened
            );
        }
        if (windowOpened === 4) setnavg(true);
        if (windowOpened < 3) setwindowOpned(windowOpened + 1);
    };
    const passwordhandler = (ev) => {
        setpassword(ev.target.value);
        // setcanrender(true);
    };
    const handlewindowsnav = () => {
        if (windowOpened === 0) onClose();
        else setwindowOpned(windowOpened - 1);
    };
    const EditInformation = () => {
        setwindowOpned(windowOpened - 1);
    };

    return (
        <div className="sign-up-page-container">
            <div className="login-window-header">
                <button
                    className="login-window-header-close-button"
                    onClick={handlewindowsnav}
                >
                    {windowOpened === 0 ? 'x' : '←'}
                </button>
                <img src="../../../assets/logo2.ico" alt="TweaXy Logo" />
            </div>
            {windowOpened === 0 && (
                <SignUpPage1
                    nextWindowHandler={nextWindowHandler}
                    Data1={Data1}
                    changeData1={changeData1}
                    Data2={Data2}
                    changeData2={changeData2}
                />
            )}
            {windowOpened === 1 && (
                <SignUpPage3
                    Data1={Data1}
                    Data2={Data2}
                    EditInformation={EditInformation}
                    nextWindowHandler={nextWindowHandler}
                />
            )}
            {windowOpened === 2 && (
                <SignUpPage4
                    verficationcode={verficationcode}
                    setverficationcode={setverficationcode}
                    Data1={Data1}
                    nextWindowHandler={nextWindowHandler}
                />
            )}
            {windowOpened === 3 && (
                <SignUpPage5
                    canbeuser={canbeuser}
                    password={password}
                    passwordhandler={passwordhandler}
                    nextWindowHandler={nextWindowHandler}
                />
            )}
            {windowOpened === 4 && nextWindowHandler()}
        </div>
    );
};

export { SignUpPage as default, Errors };
