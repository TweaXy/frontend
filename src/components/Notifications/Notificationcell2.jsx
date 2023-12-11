import './Notificationcell.css';
import './NotificationsAvaters.css';
import MangaAvatar from '../../../assets/Manga.png';
import followicon from '../../../assets/follow.png';
import Avatar from '@mui/material/Avatar';

// this cell is customized when someone is adding you only
const Notificationcell2 = ({}) => {
    const routingHandlerProfile = () => {
        console.log('routing to this user profile ');
    };
    const icon = followicon;
    return (
        <>
            <div className="tweet" on onClick={routingHandlerProfile}>
                <div className="repost"></div>
                <div className="tweet-container">
                    <div className="avatar-container">
                        <div className="Notification-avatar-box1">
                            <Avatar
                                src={icon}
                                sx={{ width: 25, height: 25 }}
                            ></Avatar>
                        </div>
                        <div className="Notification-avatar-box2">
                            <Avatar
                                src={MangaAvatar}
                                sx={{ width: 30, height: 30 }}
                            ></Avatar>
                        </div>
                    </div>
                    <div className="tweet-main">
                        <div className="Notfication-user">
                            <div className="InfoInteraction-container">
                                <span className="username">Manga </span>
                                <span className="Interaction">
                                    followed you
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Notificationcell2;
