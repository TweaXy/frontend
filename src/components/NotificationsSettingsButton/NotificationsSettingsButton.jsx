import './NotificationsSettingsButton.css';
import {
    NavigateNextOutlined,
    EditNotificationsOutlined,
} from '@mui/icons-material';

const NotificationsSettingsButton = ({ onClickHandler }) => {
    return (
        <div
            className="notifications-settings-btn-container"
            onClick={onClickHandler}
        >
            <EditNotificationsOutlined
                style={{ color: '#536471', flex: '0.1' }}
            />
            <div className="text-container">
                <span className="header">Notifications</span>
                <span>Manage push notifications.</span>
            </div>
            <NavigateNextOutlined style={{ color: '#536471', flex: '0.1' }} />
        </div>
    );
};

export default NotificationsSettingsButton;
