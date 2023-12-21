import './TweetOptionsPopDown.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import BlockIcon from '@mui/icons-material/Block';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import DeleteTweetWindow from './DeleteTweetWindow';
import { useEffect, useState } from 'react';
import TweetSelectors from '../../shared/selectors/Tweets';
import mute from '../../apis/mute';
import unmute from '../../apis/unmute';
import isUserMuted from '../../apis/isMuted';
import BlockUserWindow from '../BlockUserWindow/BlockUserWindow';
import block from '../../apis/block';
import getLikers from '../../apis/getLikers';
import { useNavigate } from 'react-router';
import unfollow from '../../apis/unfollow';
import { PersonAddOutlined } from '@mui/icons-material';
import follow from '../../apis/follow';

function TweetOptionsPopDown({
    isCurrentUserTweet,
    handleClose,
    anchorEl,
    deleteTweetHandler,
    tweetid,
    token,
    username,
    userID,
    handleTweetsFiltering,
    isUserFollowed,
}) {
    const navigate = useNavigate();

    const [isMuted, setIsMuted] = useState(false);

    const [isFollowed, setIsFollowed] = useState(isUserFollowed);

    const [isDeleteWindow, setIsDeleteWindow] = useState(false);

    const [isBlockUserWindowOpened, setIsBlockUserWindowOpened] =
        useState(false);

    const handleDelete = () => {
        setIsDeleteWindow(true);
        handleClose();
    };

    const closeDeleteWindowHandler = () => {
        setIsDeleteWindow(false);
    };

    const handleUserFollow = async () => {
        if (isFollowed) {
            try {
                await unfollow(username, token);
                setIsFollowed(false);
                handleTweetsFiltering(userID, `You unfollowed @${username}`);
            } catch (error) {
                console.error(error.message);
            }
        } else {
            try {
                await follow(username, token);
                setIsFollowed(true);
                handleTweetsFiltering(userID, `You followed @${username}`);
            } catch (error) {
                console.error(error.message);
            }
        }
        handleClose();
    };

    const handleUserMute = async () => {
        if (isMuted) {
            if (await unmute(username, token)) {
                setIsMuted(false);
                handleTweetsFiltering(userID, `You unmuted @${username}`);
            }
        } else {
            if (await mute(username, token)) {
                setIsMuted(true);
                handleTweetsFiltering(userID, `You muted @${username}`);
            }
        }
    };

    const handleBlockUserWindowClose = () => {
        setIsBlockUserWindowOpened(false);
    };

    const handleBlockButtonClick = () => {
        setIsBlockUserWindowOpened(true);
    };

    const handleUserBlock = async () => {
        if (await block(username, token)) {
            handleTweetsFiltering(userID, `You blocked @${username}`);
        }
    };

    const handleAnalytics = () => {
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
                {
                    <MenuItem onClick={handleAnalytics}>
                        <BarChartOutlinedIcon />
                        View post analytics
                    </MenuItem>
                }
                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleUserFollow}>
                        {isFollowed ? (
                            <PersonRemoveIcon />
                        ) : (
                            <PersonAddOutlined />
                        )}
                        {`${isFollowed ? 'Unfollow' : 'Follow'} @${username}`}
                    </MenuItem>
                )}
                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleUserMute}>
                        {isMuted ? <VolumeMuteIcon /> : <VolumeOffIcon />}
                        {`${isMuted ? 'Unmute' : 'Mute'} @${username}`}
                    </MenuItem>
                )}
                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleBlockButtonClick}>
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
            <BlockUserWindow
                openWindow={isBlockUserWindowOpened}
                closeWindow={handleBlockUserWindowClose}
                handleUserBlock={handleUserBlock}
                username={username}
                isUserBlocked={false}
            />
        </div>
    );
}

export { TweetOptionsPopDown };
