import './ChangeUsernamePage.css';
import {
    CircularProgress,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import Sidebar from '../../components/homePage_components/Sidebar';
import checkPassword from '../../apis/checkPassword';
import updateUsername from '../../apis/updateUsername';
import { setUser } from '../../redux/actions';
import NotifyBox from '../../components/NotifyBox/NotifyBox';
import SettingsPageSelectors from '../../shared/selectors/SettingsPage';

const ChangeUsernamePage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isUsernameUpdated, setIsUsernameUpdated] = useState(false);

    const [newUsername, setNewUsername] = useState('');
    const [newUsernameError, setNewUsernameError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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

    const onNewUsernameChange = (curUsername) => {
        setNewUsername(curUsername);
        setNewUsernameError('');
    };

    const checkUserPassword = async () => {
        try {
            const response = await checkPassword(password, token);
            if (response) {
                console.log('password checked!');
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

    const updateUsernameHandler = async () => {
        try {
            const response = await updateUsername(newUsername, token);
            if (response) {
                dispatch(setUser({ ...user, username: newUsername }));
                console.log('username is changed successfully!');
                setIsUsernameUpdated(true);
                const timeoutID = setTimeout(() => {
                    setIsUsernameUpdated(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            } else {
                setNewUsernameError(
                    'Something went wrong, please try again later.'
                );
            }
        } catch (error) {
            setNewUsernameError(error.message);
        }
    };

    useEffect(() => {
        if (token && user) {
            console.log('token from settings/username page: ', token);
            setIsPageLoading(false);
        } else {
            console.log('Loading Settings page...');
        }
    }, [token, user]);

    if (isPageLoading) {
        return (
            <div className="loading-page">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="change-username-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="change-username-widget">
                <div className="change-username-header">
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
                    <span>Change your username</span>
                </div>
                {passwordChecked === false && (
                    <div className="change-username-body">
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
                                    data-test={SettingsPageSelectors.PASSWORD_FIELD}
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
                                data-test={SettingsPageSelectors.CONFIRM_PASSWORD_BUTTON}
                                className="blue-btn"
                                disabled={password === ''}
                                onClick={checkUserPassword}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                )}
                {passwordChecked === true && (
                    <div className="change-username-body">
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
                                    Username
                                </InputLabel>
                                <OutlinedInput
                                    data-test={SettingsPageSelectors.USERNAME_FIELD}
                                    id="outlined-adornment-password"
                                    type={'text'}
                                    value={newUsername}
                                    onChange={(e) =>
                                        onNewUsernameChange(e.target.value)
                                    }
                                    label="Username"
                                    placeholder={user.username}
                                />
                            </FormControl>
                        </div>
                        <div className="btn-wrapper">
                            {newUsernameError && (
                                <span className="error-message">
                                    newUsernameError
                                </span>
                            )}
                            <button
                                data-test={SettingsPageSelectors.CONFIRM_USERNAME_BUTTON}
                                className="blue-btn"
                                disabled={newUsername === ''}
                                onClick={updateUsernameHandler}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {isUsernameUpdated && (
                <NotifyBox text={`username is changed successfully`} />
            )}
        </div>
    );
};

export default ChangeUsernamePage;
