import './SettingsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/homePage_components/Sidebar';
import ChangePasswordButton from '../../components/ChangePasswordButton/ChangePasswordButton';
import ChangeUsernameButton from '../../components/ChangeUsernameButton/ChangeUsernameButton';
import { clearUser } from '../../redux/actions';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import ChangeEmailButton from '../../components/ChangeEmailButton/ChangeEmailButton';
import MuteSettingsButton from '../../components/MuteSettingsButton/MuteSettingsButton';
import BlockSettingsButton from '../../components/BlockSettingsButton/BlockSettingsButton';

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
            </div>
        </div>
    );
};

export default SettingsPage;
