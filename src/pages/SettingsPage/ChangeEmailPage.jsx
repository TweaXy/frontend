import './ChangeEmailPage.css';
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { setUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/homePage_components/Sidebar';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import NotifyBox from '../../components/NotifyBox/NotifyBox';
import checkPassword from '../../apis/checkPassword';
import updateEmail from '../../apis/updateEmail';
import { sendEmailVerification } from '../../apis/EmailVerfication';
import SettingsPageSelectors from '../../shared/selectors/SettingsPage';

const ChangeEmailPage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isEmailUpdated, setIsEmailUpdated] = useState(false);

    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailVerificationToken, setEmailVerificationToken] = useState('');

    const [newEmailError, setNewEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [emailChecked, setEmailChecked] = useState(false);
    const [passwordChecked, setPasswordChecked] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleForgotPassword = () => {
        navigate('/forget-password');
    };

    const onPasswordChange = (password) => {
        setPassword(password);
        setPasswordError('');
    };

    const onNewEmailChange = (curEmail) => {
        setNewEmail(curEmail);
        setNewEmailError('');
    };

    const onEmailVerificationTokenChange = (curEmailVerificationToken) => {
        setEmailVerificationToken(curEmailVerificationToken);
        setNewEmailError('');
    };

    const checkUserPassword = async () => {
        try {
            const response = await checkPassword(password, token);
            if (response) {
                setPasswordChecked(true);
            } else {
                setPasswordError(
                    'Error checking your password, please try again later.'
                );
            }
        } catch (error) {
            setPasswordError(error.message);
        }
    };

    const verifyEmailHandler = async () => {
        try {
            await sendEmailVerification(newEmail);
            setEmailChecked(true);
        } catch (error) {
            setNewEmailError(error.message);
        }
    };

    const updateEmailHandler = async () => {
        try {
            const response = await updateEmail(
                newEmail,
                emailVerificationToken,
                token
            );
            if (response) {
                dispatch(setUser({ ...user, email: newEmail }));
                setIsEmailUpdated(true);
                const timeoutID = setTimeout(() => {
                    setIsEmailUpdated(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            } else {
                setNewEmailError(
                    'Something went wrong, please try again later.'
                );
            }
        } catch (error) {
            setNewEmailError(error.message);
        }
    };

    useEffect(() => {
        if (token && user) {
            setIsPageLoading(false);
        }
    }, [token, user]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="change-email-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="change-email-widget">
                <div className="change-email-header">
                    <div
                        className="arrow-back"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <div className="shadow">
                            <ArrowBack />
                        </div>
                    </div>
                    <span>Change your Email</span>
                </div>
                {passwordChecked === false && (
                    <div className="change-email-body">
                        <div className="span-wrapper">
                            <span className="header-span">
                                Confirm your password
                            </span>
                            <span>
                                Please enter your password in order to proceed.
                            </span>
                        </div>
                        <div className="passwords-wrapper">
                            <FormControl
                                sx={{
                                    m: 1,
                                    width: '100%',
                                    height: '64px',
                                    maxWidth: '600px',
                                }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    data-test={
                                        SettingsPageSelectors.CURRENT_PASSWORD_FIELD
                                    }
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) =>
                                        onPasswordChange(e.target.value)
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                onMouseDown={() => {
                                                    event.preventDefault();
                                                }}
                                                edge="end"
                                            ></IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <span onClick={handleForgotPassword}>
                                Forgot password?
                            </span>
                        </div>
                        <div className="btn-wrapper">
                            {passwordError && (
                                <span className="error-message">
                                    {passwordError}
                                </span>
                            )}
                            <button
                                data-test={SettingsPageSelectors.NEXT_BUTTON}
                                className="blue-btn"
                                disabled={password === ''}
                                onClick={checkUserPassword}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                )}
                {passwordChecked === true && emailChecked === false && (
                    <div className="change-email-body">
                        <div className="passwords-wrapper">
                            <FormControl
                                sx={{
                                    m: 1,
                                    width: '100%',
                                    height: '64px',
                                    maxWidth: '600px',
                                }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Email
                                </InputLabel>
                                <OutlinedInput
                                    data-test={
                                        SettingsPageSelectors.NEW_EMAIL_FIELD
                                    }
                                    id="outlined-adornment-password"
                                    type={'text'}
                                    value={newEmail}
                                    onChange={(e) =>
                                        onNewEmailChange(e.target.value)
                                    }
                                    label="email"
                                    placeholder={user.email}
                                />
                            </FormControl>
                        </div>
                        <div className="btn-wrapper">
                            {newEmailError && (
                                <span className="error-message">
                                    {newEmailError}
                                </span>
                            )}
                            <button
                                data-test={SettingsPageSelectors.NEXT_BUTTON}
                                className="blue-btn"
                                disabled={newEmail === ''}
                                onClick={verifyEmailHandler}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                )}
                {passwordChecked === true && emailChecked === true && (
                    <div className="change-email-body">
                        <div className="passwords-wrapper">
                            <FormControl
                                sx={{
                                    m: 1,
                                    width: '100%',
                                    height: '64px',
                                    maxWidth: '600px',
                                }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Verification code
                                </InputLabel>
                                <OutlinedInput
                                    data-test={
                                        SettingsPageSelectors.VERIFICATION_CODE_FIELD
                                    }
                                    id="outlined-adornment-password"
                                    type={'text'}
                                    value={emailVerificationToken}
                                    onChange={(e) =>
                                        onEmailVerificationTokenChange(
                                            e.target.value
                                        )
                                    }
                                    label="Verification code"
                                />
                            </FormControl>
                        </div>
                        <div className="btn-wrapper">
                            {newEmailError && (
                                <span className="error-message">
                                    {newEmailError}
                                </span>
                            )}
                            <button
                                data-test={SettingsPageSelectors.NEXT_BUTTON}
                                className="blue-btn"
                                disabled={emailVerificationToken.length !== 8}
                                onClick={updateEmailHandler}
                            >
                                Change your email
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {isEmailUpdated && (
                <NotifyBox text={`Email is changed successfully`} />
            )}
        </div>
    );
};

export default ChangeEmailPage;
