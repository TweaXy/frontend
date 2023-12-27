import './NotificationsSettingsPage.css';
import { Button } from '@mui/base';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import { requestForToken } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import InitNotifications from '../../apis/NotificationsApis/InitNotifications';
import getPushNotificationStatus from '../../apis/getPushNotificationStatus';
import disableNotifications from '../../apis/disableNotifications';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Sidebar from '../../components/homePage_components/Sidebar';
import Switch from '@mui/material/Switch';
import NotifyBox from '../../components/NotifyBox/NotifyBox';

const NotificationsSettingsPage = () => {
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    const [webToken, setWebToken] = useState(
        useSelector((state) => state.user.WebToken)
    );

    const [isPushNotificationsOn, setIsPushNotificationsOn] = useState(false);

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePushNotificationSwitchChange = async () => {
        try {
            if (isPushNotificationsOn) {
                disableNotifications(token, webToken);
                setIsPushNotificationsOn(false);
            } else {
                if (webToken === null) {
                    setWebToken(await requestForToken());
                    dispatch(setWebToken(webToken));
                }
                InitNotifications(token, webToken);
                setIsPushNotificationsOn(true);
            }
        } catch (error) {
            console.error(error.message);
            setErrorMessage('Something went wrong, please try again later.');
            const timeoutId = setTimeout(setErrorMessage(''), 3000);
            return () => clearTimeout(timeoutId);
        }
    };

    const handleButtonClick = async () => {
        if (webToken === null) {
            setWebToken(await requestForToken());
            dispatch(setWebToken(webToken));
        }
        InitNotifications(token, webToken);
        setIsPushNotificationsOn(true);
    };

    useEffect(() => {
        if (token && user) {
            if (webToken) {
                setIsPushNotificationsOn(getPushNotificationStatus(token));
            }
            setIsPageLoading(false);
        }
    }, [token, user, webToken]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="notifications-settings-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="notifications-settings-widget">
                <div className="notifications-settings-header">
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
                    <span>Push notifications</span>
                </div>
                <div className="notifications-settings-body">
                    <div className="push-notifications-switch-container">
                        <div className="header-switch">
                            <span>Push notifications</span>
                            <Switch
                                checked={isPushNotificationsOn}
                                onChange={handlePushNotificationSwitchChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                        <span>
                            Get push notifications to find out what’s going on
                            when you’re not on TweaXy. You can turn them off
                            anytime.
                        </span>
                    </div>
                    {isPushNotificationsOn ? (
                        <span className="push-notifications-on-border"></span>
                    ) : (
                        <div className="push-notifications-button-container">
                            <div className="span-container">
                                <span className="header-span">
                                    Turn on push notifications
                                </span>
                                <span className="body-span">
                                    To receive notifications as they happen,
                                    turn on push notifications. You'll also
                                    receive them when you're not on TweaXy. Turn
                                    them off anytime.
                                </span>
                                <Button
                                    variant="outlined"
                                    className="push-notifications-btn"
                                    onClick={handleButtonClick}
                                    sx={{ lineHeight: 2.2, fontSize: 17 }}
                                >
                                    Turn on
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {errorMessage.length !== 0 && <NotifyBox text={errorMessage} />}
        </div>
    );
};

export default NotificationsSettingsPage;
