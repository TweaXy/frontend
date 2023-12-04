import { LockResetOutlined, NavigateNextOutlined } from '@mui/icons-material';
import './ChangePasswordButton.css';

const ChangePasswordButton = ({ onClickHandler }) => {
    return (
        <div className="change-password-btn-container" onClick={onClickHandler}>
            <LockResetOutlined style={{ color: '#536471', flex: '0.1' }} />
            <div className="text-container">
                <span className="header">Change your password</span>
                <span>Change your password at anytime.</span>
            </div>
            <NavigateNextOutlined style={{ color: '#536471', flex: '0.1' }} />
        </div>
    );
};

export default ChangePasswordButton;
