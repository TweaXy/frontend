import './SettingsPage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Sidebar from '../../components/homePage_components/Sidebar';
import ChangeEmailButton from '../../components/ChangeEmailButton/ChangeEmailButton';
import MuteSettingsButton from '../../components/MuteSettingsButton/MuteSettingsButton';
import BlockSettingsButton from '../../components/BlockSettingsButton/BlockSettingsButton';
import ChangePasswordButton from '../../components/ChangePasswordButton/ChangePasswordButton';
import ChangeUsernameButton from '../../components/ChangeUsernameButton/ChangeUsernameButton';
import NotificationsSettingsButton from '../../components/NotificationsSettingsButton/NotificationsSettingsButton';

const SettingsPage = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token && user) {
            setIsPageLoading(false);
        }

        const timeoutId = setTimeout(() => {
            if (user && token) {
                setIsPageLoading(false);
            } else {
                dispatch(clearUser());
                navigate('/');
            }
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [user, token, navigate, dispatch]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="settings-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="settings-widget">
                <span className="header-span">Settings</span>
                <span>
                    Update your account information, manage what information you
                    see and share on TweaXy, or manage notifications.
                </span>
                <ChangeUsernameButton
                    onClickHandler={() => {
                        navigate('/settings/username');
                    }}
                />
                <ChangeEmailButton
                    onClickHandler={() => {
                        navigate('/settings/email');
                    }}
                />
                <ChangePasswordButton
                    onClickHandler={() => {
                        navigate('/settings/password');
                    }}
                />
                <MuteSettingsButton
                    onClickHandler={() => {
                        navigate('/settings/mute');
                    }}
                />
                <BlockSettingsButton
                    onClickHandler={() => {
                        navigate('/settings/blocked');
                    }}
                />
                <NotificationsSettingsButton
                    onClickHandler={() => {
                        navigate('/settings/notifications');
                    }}
                />
            </div>
        </div>
    );
};

export default SettingsPage;
