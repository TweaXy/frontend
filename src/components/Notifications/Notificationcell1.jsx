import './Notificationcell.css';
import './NotificationsAvaters.css';
import MangaAvatar from '../../../assets/Manga.png';
import Avatar from '@mui/material/Avatar';
import { Navigate, useNavigate } from 'react-router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
const Notificationcell1 = ({ fromuser, interaction,user }) => {
    const naviagate = useNavigate();
    const routingHandlerTweet = () => {
        console.log('routing to the tweet ');
    };
    const getreplieshandler = (event) => {
        naviagate(`/${user.username}/${interaction.id}`, {
            state: { tweetId: interaction.id },
        });
    };
    const routingHandlerProfile = (event) => {
        event.stopPropagation();
        console.log('routing to this user profile ');
        //route to the user profile
        naviagate(`/profile/${fromuser.username}`, {
            state: { userID: fromuser.id },
        });
    };
    return (
        <>
            <div className="tweet"  onClick={getreplieshandler}>
                <div className="repost"></div>
                <div className="tweet-container">
                    <div className="avatar-container">
                        <div className="Notification-avatar-box1">
                            <FavoriteIcon
                                sx={{ width: 30, height: 30, color: pink[500] }}
                            />
                        </div>
                        <div
                            className="Notification-avatar-box2"
                            onClick={routingHandlerProfile}
                        >
                            <Avatar
                                src={`https://tweaxybackend.mywire.org/api/v1/images/${fromuser.avatar}`}
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
