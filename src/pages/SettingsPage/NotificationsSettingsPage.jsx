import './NotificationsSettingsPage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Switch from '@mui/material/Switch';
import { ArrowBack } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Button } from '@mui/base';

const NotificationsSettingsPage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    // TODO : add if push notifications enabled (redux) 
    const [isPushNotificationsOn, setIsPushNotificationsOn] = useState(true);

    const [isPageLoading, setIsPageLoading] = useState(true);

    const navigate = useNavigate();

    const handlePushNotificationSwitchChange = (event) => {
        setIsPushNotificationsOn(event.target.checked);
    };

    const handleButtonClick = () => {
        // TODO: turn on push notifications
    };

    useEffect(() => {
        // TODO: check first if push notifications was off.
        if (isPushNotificationsOn) {
            console.log('push notifications is on..');
        }
    }, [isPushNotificationsOn]);

    useEffect(() => {
        if (token && user) {
            setIsPageLoading(false);
        }
    }, [token, user]);

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
        </div>
    );
};

export default NotificationsSettingsPage;
