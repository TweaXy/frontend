import './TweetOptionsPopDown.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import BlockIcon from '@mui/icons-material/Block';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteTweetWindow from './DeleteTweetWindow';
import { useEffect, useState } from 'react';
import TweetSelectors from '../../shared/selectors/Tweets';
import mute from '../../apis/mute';
import unmute from '../../apis/unmute';
import NotifyBox from '../NotifyBox/NotifyBox';
import isUserMuted from '../../apis/isMuted';
import getLikers from '../../apis/getLikers';
import { useNavigate } from 'react-router';

function TweetOptionsPopDown({
    isCurrentUserTweet,
    handleClose,
    anchorEl,
    deleteTweetHandler,
    tweetid,
    token,
    username,
    userID,
    
}) {
   
    const navigate=useNavigate();
    const [isDeleteWindow, setIsDeleteWindow] = useState(false);

    const [isMuted, setIsMuted] = useState(false);
    const [muteActionOccurred, setMuteActionOccurred] = useState(false);

    const handleDelete = () => {
        // Implement delete functionality here
        setIsDeleteWindow(true);
        console.log('Deleting tweet...');
        handleClose();
    };
    const closeDeleteWindowHandler = () => {
        setIsDeleteWindow(false);
    };
    const handleUnFollow = (e) => {
        console.log('unfollowed');
        handleClose();
    };

    const handleUserMute = async () => {
        if (isMuted) {
            if (await unmute(username, token)) {
                setIsMuted(false);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                handleClose();
                return () => clearTimeout(timeoutID);
            }
        } else {
            if (await mute(username, token)) {
                setIsMuted(true);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                handleClose();
                return () => clearTimeout(timeoutID);
            }
        }
    };

    const handleBlock = (e) => {
        console.log('Blocked');
        handleClose();
    };

    const handleAnalytics = (e) => {
        getLikers({ tweetId: tweetid, token: token });
      navigate(`/likers`, {
           state: {
               tweetid: tweetid,
                token: token,
            },
        });
    };

    useEffect(() => {
        const handleIfUserMuted = async () => {
            setIsMuted(await isUserMuted(userID, token));
        };

        handleIfUserMuted();
    }, [anchorEl, userID, token]);

    return (
        <div className="tweet-options">
            {' '}
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="tweet-options-menu"
            >
                {isCurrentUserTweet && (
                    <MenuItem
                        data-test={TweetSelectors.DELETE_TWEET}
                        onClick={handleDelete}
                        className="delete-option"
                        sx={{
                            color: 'red',
                            fontWeight: '600',
                        }}
                    >
                        <DeleteOutlineIcon />
                        Delete
                    </MenuItem>
                )}
                {isCurrentUserTweet && (
                    <MenuItem onClick={handleAnalytics}>
                        <BarChartOutlinedIcon />
                        View post analytics
                    </MenuItem>
                )}
                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleUnFollow}>
                        <PersonRemoveIcon />
                        {`Unfollow @${username}`}
                    </MenuItem>
                )}
                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleUserMute}>
                        {isMuted ? <VolumeMuteIcon /> : <VolumeOffIcon />}
                        {`${isMuted ? 'Unmute' : 'Mute'} @${username}`}
                    </MenuItem>
                )}
                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleBlock}>
                        <BlockIcon />
                        {`Block @${username}`}
                    </MenuItem>
                )}
            </Menu>
            <DeleteTweetWindow
                open={isDeleteWindow}
                closeHandler={closeDeleteWindowHandler}
                deleteTweet={deleteTweetHandler}
            />
            {muteActionOccurred && (
                <NotifyBox
                    text={`@${username} has been ${
                        isMuted ? 'muted' : 'unmuted'
                    }`}
                />
            )}
        </div>
    );
}

export { TweetOptionsPopDown };
