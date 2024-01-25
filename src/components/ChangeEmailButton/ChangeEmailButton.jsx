import './ChangeEmailButton.css';
import { MailOutlined, NavigateNextOutlined } from '@mui/icons-material';
import SettingsPageSelectors from '../../shared/selectors/SettingsPage';

const ChangeEmailButton = ({ onClickHandler }) => {
    return (
        <div
            data-test={SettingsPageSelectors.CHANGE_EMAIL_BUTTON}
            className="change-email-btn-container"
            onClick={onClickHandler}
        >
            <MailOutlined style={{ color: '#536471', flex: '0.1' }} />
            <div className="text-container">
                <span className="header">Change your email</span>
                <span>Change your email at anytime.</span>
            </div>
            <NavigateNextOutlined style={{ color: '#536471', flex: '0.1' }} />
        </div>
    );
};

export default ChangeEmailButton;
