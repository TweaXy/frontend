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
import BlockUserWindow from '../BlockUserWindow/BlockUserWindow';
import block from '../../apis/block';
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
    handleTimelineAfterMuteOrBlock,
}) {
    const navigate = useNavigate();
    const [isDeleteWindow, setIsDeleteWindow] = useState(false);

    const [isMuted, setIsMuted] = useState(false);
    const [muteActionOccurred, setMuteActionOccurred] = useState(false);

    const [isBlocked, setIsBlocked] = useState(false);
    const [blockActionOccurred, setBlockActionOccurred] = useState(false);

    const [isBlockUserWindowOpened, setIsBlockUserWindowOpened] =
        useState(false);

    const handleDelete = () => {
        setIsDeleteWindow(true);
        handleClose();
    };
    const closeDeleteWindowHandler = () => {
        setIsDeleteWindow(false);
    };
    const handleUnFollow = (e) => {
        handleClose();
    };

    const handleUserMute = async () => {
        if (isMuted) {
            if (await unmute(username, token)) {
                setIsMuted(false);
                handleTimelineAfterMuteOrBlock(userID);
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
                handleTimelineAfterMuteOrBlock(userID);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                handleClose();
                return () => clearTimeout(timeoutID);
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
            setIsBlocked(true);
            setBlockActionOccurred(true);
            handleTimelineAfterMuteOrBlock(userID);
            const timeoutID = setTimeout(() => {
                setBlockActionOccurred(false);
            }, 3000);
            handleClose();
            return () => clearTimeout(timeoutID);
        }
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
                {
                    <MenuItem onClick={handleAnalytics}>
                        <BarChartOutlinedIcon />
                        View post analytics
                    </MenuItem>
                }
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
            {muteActionOccurred && (
                <NotifyBox
                    text={`@${username} has been ${
                        isMuted ? 'muted' : 'unmuted'
                    }`}
                />
            )}
            {blockActionOccurred && (
                <NotifyBox
                    text={`@${username} has been ${
                        isBlocked ? 'blocked' : 'unblock'
                    }`}
                />
            )}
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
