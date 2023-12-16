import './TweetOptionsPopDown.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import BlockIcon from '@mui/icons-material/Block';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteTweetWindow from './DeleteTweetWindow';
import { useState } from 'react';
import TweetSelectors from '../../shared/selectors/Tweets';
import getLikers from '../../apis/getLikers';
import { useNavigate } from 'react-router';

function TweetOptionsPopDown({
    isCurrentUserTweet,
    handleClose,
    anchorEl,
    deleteTweetHandler,
    tweetid,
    token,
}) {
   
    const navigate=useNavigate();
    const [isDeleteWindow, setIsDeleteWindow] = useState(false);
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
                        Unfollow
                    </MenuItem>
                )}

                {!isCurrentUserTweet && (
                    <MenuItem onClick={handleBlock}>
                        <BlockIcon />
                        Block
                    </MenuItem>
                )}
            </Menu>
            <DeleteTweetWindow
                open={isDeleteWindow}
                closeHandler={closeDeleteWindowHandler}
                deleteTweet={deleteTweetHandler}
            />
        </div>
    );
}

export { TweetOptionsPopDown };
