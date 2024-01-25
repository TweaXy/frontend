import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import "./settingsConversationHeader.css"
const SettingsConversationHeader = (props) => {
    let navigate = useNavigate();
    const arrowBackRoute = () => navigate(-1);
    return (
        <div className="settings-conversation-window-header">
            <BiArrowBack
                color="black"
                size={20}
                className="arrow-back-conversation"
                onClick={arrowBackRoute}
            />
            <span className="edit-text">Conversion Info</span>
        </div>
    );
};

export default SettingsConversationHeader;
