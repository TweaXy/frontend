import './ChangePasswordPage.css';
import {
    CircularProgress,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import changePassword from '../../apis/changePassword';
import Sidebar from '../../components/homePage_components/Sidebar';
import NotifyBox from '../../components/NotifyBox/NotifyBox';

const ChangePasswordPage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);

    const [showCurPassword, setShowCurPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);

    const [curPassword, setCurPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const curPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const conPasswordRef = useRef(null);

    const [changePasswordError, setChangePasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (token && user) {
            console.log('token from settings/password page: ', token);
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

    const onCurPasswordChange = (password) => {
        setCurPassword(password);
        setChangePasswordError('');
    };

    const onNewPasswordChange = (password) => {
        setNewPassword(password);
        setNewPasswordError('');
        setChangePasswordError('');
        if (conPassword.length && password != conPassword) {
            setNewPasswordError('Passwords do not match');
        }
    };

    const onConPasswordChange = (password) => {
        setConPassword(password);
        setNewPasswordError('');
        setChangePasswordError('');
        if (conPassword.length && newPassword != password) {
            setNewPasswordError('Passwords do not match');
        }
    };

    const handleForgotPassword = () => {
        navigate('/forget-password');
    };

    const handleChangePassword = async () => {
        try {
            const response = await changePassword(
                curPassword,
                newPassword,
                conPassword,
                token
            );
            if (response) {
                console.log('Your password has been updated successfully.');
                setIsPasswordUpdated(true);
                curPasswordRef.current.value = '';
                newPasswordRef.current.value = '';
                conPasswordRef.current.value = '';
                const timeoutID = setTimeout(() => {
                    setIsPasswordUpdated(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            } else {
                setChangePasswordError(
                    'Error changing your password, please try again later.'
                );
            }
        } catch (error) {
            setChangePasswordError(error.message);
        }
    };

    return (
        <div className="change-password-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="change-password-widget">
                <div className="change-password-header">
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
                    <span>Change your password</span>
                </div>
                <div className="change-password-body">
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
                                Current password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showCurPassword ? 'text' : 'password'}
                                value={curPassword}
                                inputRef={curPasswordRef}
                                onChange={(e) =>
                                    onCurPasswordChange(e.target.value)
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() =>
                                                setShowCurPassword(
                                                    !showCurPassword
                                                )
                                            }
                                            onMouseDown={() => {
                                                event.preventDefault();
                                            }}
                                            edge="end"
                                        ></IconButton>
                                    </InputAdornment>
                                }
                                label="Current password"
                            />
                        </FormControl>
                        <span onClick={handleForgotPassword}>
                            Forgot password?
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
                                New password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showCurPassword ? 'text' : 'password'}
                                value={newPassword}
                                inputRef={newPasswordRef}
                                onChange={(e) =>
                                    onNewPasswordChange(e.target.value)
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() =>
                                                setShowNewPassword(
                                                    !showNewPassword
                                                )
                                            }
                                            onMouseDown={() => {
                                                event.preventDefault();
                                            }}
                                            edge="end"
                                        ></IconButton>
                                    </InputAdornment>
                                }
                                label="New password"
                            />
                        </FormControl>
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
                                Confirm password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showConPassword ? 'text' : 'password'}
                                value={conPassword}
                                inputRef={conPasswordRef}
                                onChange={(e) =>
                                    onConPasswordChange(e.target.value)
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() =>
                                                setShowConPassword(
                                                    !showConPassword
                                                )
                                            }
                                            onMouseDown={() => {
                                                event.preventDefault();
                                            }}
                                            edge="end"
                                        ></IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm password"
                            />
                        </FormControl>
                        {newPasswordError && (
                            <span className="error-message">
                                {newPasswordError}
                            </span>
                        )}
                    </div>
                    <div className="btn-wrapper">
                        {changePasswordError && (
                            <span className="error-message">
                                {changePasswordError}
                            </span>
                        )}
                        <button
                            className="blue-btn"
                            disabled={
                                curPassword === '' ||
                                newPassword === '' ||
                                newPassword != conPassword
                            }
                            onClick={handleChangePassword}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            {isPasswordUpdated && (
                <NotifyBox text={'Password has been updated successfully.'} />
            )}
        </div>
    );
};

export default ChangePasswordPage;
