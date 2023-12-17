import './MuteSettingsButton.css';
import { NavigateNextOutlined, PersonOffOutlined } from '@mui/icons-material';

const MuteSettingsButton = ({ onClickHandler }) => {
    return (
        <div className="mute-settings-btn-container" onClick={onClickHandler}>
            <PersonOffOutlined style={{ color: '#536471', flex: '0.1' }} />
            <div className="text-container">
                <span className="header">Mute</span>
                <span>Manage the accounts that you've muted.</span>
            </div>
            <NavigateNextOutlined style={{ color: '#536471', flex: '0.1' }} />
        </div>
    );
};

export default MuteSettingsButton;
