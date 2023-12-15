import './Notificationcell.css';
import './NotificationsAvaters.css';
import loveicon from '../../../assets/love.jpeg';
import reposticon from '../../../assets/repost.png';
import MangaAvatar from '../../../assets/Manga.png';
import followicon from '../../../assets/follow.png';
import Avatar from '@mui/material/Avatar';
import { Navigate, useNavigate } from 'react-router';
const Notificationcell1 = ({
    fromuser,
    interaction
    
}) => {
    const naviagate=useNavigate();
    const routingHandlerTweet = () => {
        console.log('routing to the tweet ');
        // route to the tweet
    };
    const routingHandlerProfile = (event) => {
        event.stopPropagation();
        console.log('routing to this user profile ');
        //route to the user profile
        naviagate(`/profile/${fromuser.username}`, { state: {userID:fromuser.id}})
    };
    const icon = loveicon
    return (
        <>
            <div className="tweet" on onClick={routingHandlerTweet}>
                <div className="repost"></div>
                <div className="tweet-container">
                    <div className="avatar-container">
                        <div className="Notification-avatar-box1">
                            <Avatar
                                src={icon}
                                sx={{ width: 25, height: 25 }}
                            ></Avatar>
                        </div>
                        <div
                            className="Notification-avatar-box2"
                            onClick={routingHandlerProfile}
                        >
                            <Avatar
                                src={MangaAvatar}
                                sx={{ width: 30, height: 30 }}
                            ></Avatar>
                        </div>
                    </div>
                    <div className="tweet-main">
                        <div className="Notfication-user">
                            <div className="InfoInteraction-container">
                                <span
                                    className="username"
                                    onClick={routingHandlerProfile}
                                >
                                    {fromuser.name}{' '}
                                </span>
                                <span className="Interaction">
                                    Liked your {interaction.type}
                                </span>
                            </div>
                        </div>
                        <div className="tweet-text-container">
                            {interaction.text}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Notificationcell1;
