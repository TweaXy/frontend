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

function TweetOptionsPopDown({
    isCurrentUserTweet,
    handleClose,
    anchorEl,
    deleteTweetHandler,
}) {
    const [isDeleteWindow, setIsDeleteWindow] = useState(false);
    const handleDelete = (event) => {
        event.stopPropagation();
        // Implement delete functionality here
        setIsDeleteWindow(true);
        console.log('Deleting tweet...');
        handleClose(event);
    };
    const closeDeleteWindowHandler = () => {
        setIsDeleteWindow(false);
    };
    const handleUnFollow = (event) => {
        event.stopPropagation();
        console.log('unfollowed');
        handleClose(event);
    };

    const handleBlock = (event) => {
        event.stopPropagation();
        console.log('Blocked');
        handleClose(event);
    };

    const handleAnalytics = (event) => {
        event.stopPropagation();
        console.log('Analytics');
        handleClose(event);
    };
    return (
        <div className="tweet-options">
            {' '}
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className='tweet-options-menu'
            >
                {isCurrentUserTweet && (
                    <MenuItem
                        data-test={TweetSelectors.DELETE_TWEET} onClick={handleDelete}
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
