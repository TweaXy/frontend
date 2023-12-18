import './conversationHeader.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const ConversationWindowHeader = () => (
    <div className="conversation-window-header">
        <span className="edit-text">Messages</span>

        <span className="icon-settings-wrapper">
            <SettingsOutlinedIcon />
        </span>
        <span className="icon-add-message-wrapper">
            <EmailOutlinedIcon />
        </span>
    </div>
);

export default ConversationWindowHeader;
