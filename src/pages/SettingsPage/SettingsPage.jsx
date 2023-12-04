import './SettingsPage.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Sidebar from '../../components/homePage_components/Sidebar';
import ChangePasswordButton from '../../components/ChangePasswordButton/ChangePasswordButton';
import ChangeUsernameButton from '../../components/ChangeUsernameButton/ChangeUsernameButton';

const SettingsPage = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const navigate = useNavigate();

    useEffect(() => {
        if (user && token) {
            console.log('user from settings page: ', user);
            console.log('token from settings page: ', token);
            setIsPageLoading(false);
        } else {
            console.log('Loading Settings page...');
        }
    }, [user, token]);

    if (isPageLoading) {
        return (
            <div className="loading-page">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="settings-page-container">
            <Sidebar />
            <div className="settings-widget">
                <span className="header-span">Your Account</span>
                <span>
                    See information about your account, update your account
                    information, or change your account password.
                </span>
                <ChangeUsernameButton
                    onClickHandler={() => {
                        navigate('/settings/username');
                    }}
                />
                <ChangePasswordButton
                    onClickHandler={() => {
                        navigate('/settings/password');
                    }}
                />
            </div>
        </div>
    );
};

export default SettingsPage;
