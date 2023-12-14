import './NotificationsButton.css';
import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router';
import { NotificationsActive, NotificationsNone } from '@mui/icons-material';
import getUnseenNotificationsCount from '../../apis/getUnseenNotificationsCount';

const NotificationsButton = ({ active, token }) => {
    const [notificationsCount, setNotificationCount] = useState(0);
    const navigate = useNavigate();

    const handleNotificationsButtonClick = () => {
        navigate('/Notifications');
    };

    useEffect(() => {
        const getCurUnseenNotificationCount = async () => {
            try {
                const curUnseenNotificationsCount =
                    await getUnseenNotificationsCount(token);
                setNotificationCount(curUnseenNotificationsCount);
            } catch (error) {
                console.error(error.message);
                setNotificationCount(0);
            }
        };

        if (active === true) {
            setNotificationCount(0);
        } else {
            getCurUnseenNotificationCount();
        }
    }, [token, active]);

    return (
        <div
            className={`notifications-container ${
                active === true && 'active-notifications-container'
            }`}
            onClick={handleNotificationsButtonClick}
        >
            {notificationsCount === 0 && (
                <div className="notifications-icon-wrapper">
                    <NotificationsNone />
                </div>
            )}
            {notificationsCount !== 0 && (
                <div className="notifications-icon-wrapper">
                    <Badge
                        color="primary"
                        badgeContent={notificationsCount}
                        max={9}
                    >
                        <NotificationsActive />
                    </Badge>
                </div>
            )}
            <h2>Notifications</h2>
        </div>
    );
};

export default NotificationsButton;
