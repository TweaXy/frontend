import { NavigateNextOutlined, PersonOutlined } from '@mui/icons-material';
import './ChangeUsernameButton.css'

const ChangeUsernameButton = ({ onClickHandler }) => {
    return (
        <div className="change-username-btn-container" onClick={onClickHandler}>
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
