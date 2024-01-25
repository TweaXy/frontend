import { NavigateNextOutlined, PersonOutlined } from '@mui/icons-material';
import './ChangeUsernameButton.css'
import SettingsPageSelectors from '../../shared/selectors/SettingsPage';

const ChangeUsernameButton = ({ onClickHandler }) => {
    return (
        <div data-test={SettingsPageSelectors.UPDATE_USERNAME_BUTTON} className="change-username-btn-container" onClick={onClickHandler}>
            <PersonOutlined style={{ color: '#536471', flex: '0.1' }} />
            <div className="text-container">
                <span className="header">Change your username</span>
                <span>Change your username at anytime.</span>
            </div>
            <NavigateNextOutlined style={{ color: '#536471', flex: '0.1' }} />
        </div>
    );
};

export default ChangeUsernameButton;
