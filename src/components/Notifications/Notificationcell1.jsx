import './Notificationcell.css';
import './NotificationsAvaters.css';
import loveicon from '../../../assets/love.jpeg';
import reposticon from '../../../assets/repost.png';
import MangaAvatar from '../../../assets/Manga.png';
import followicon from '../../../assets/follow.png';
import Avatar from '@mui/material/Avatar';
const Notificationcell1 = ({
    interactionType = 'Liked',
    PostType = 'Tweet',
}) => {
    const routingHandlerTweet = () => {
        console.log('routing to the tweet ');
        // route to the tweet
    };
    const routingHandlerProfile = (event) => {
        event.stopPropagation();
        console.log('routing to this user profile ');
        //route to the user profile
    };
    const icon =
        interactionType === 'liked'
            ? loveicon
            : interactionType === 'reposted'
            ? reposticon
            : followicon;
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
                                    Manga{' '}
                                </span>
                                <span className="Interaction">
                                    {interactionType} your {PostType}
                                </span>
                            </div>
                        </div>
                        <div className="tweet-text-container">
                            This is a Notification Test
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Notificationcell1;
