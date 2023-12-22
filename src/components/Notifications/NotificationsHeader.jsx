import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import '../../components/homePage_components/Feed.css';
import '../../components/homePage_components/FeedHeader.css';
import Tweet from '../homePage_components/Tweet';
const NotificationHeader = ({}) => {
    return (
        <div className={'reply-header'} style={{ borderBottom: 'none' }}>
        <div style={{ flex: 1 }} className="reply-header-element ">
                <span className={'--feed-header-active'}>Notifications</span>
            </div>
            <div className="icon-wrapper">
                <SettingsOutlinedIcon className="timeline-settings" />
            </div>
        </div>
    );
};
export default NotificationHeader;
