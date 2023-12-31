import './tweetRepostPopDown.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import TweetSelectors from '../../shared/selectors/Tweets';

function tweetRepostPopDown({
    handleClose,
    anchorEl,
    quoteTweetHandler
}) {
    const [isQuoteWindow, setIsQuoteWindow] = useState(false);
    const handleDelete = () => {
        // Implement delete functionality here
        setIsQuoteWindow(true);
        console.log('Deleting tweet...');
        handleClose();
    };
    const closeDeleteWindowHandler = () => {
        setIsQuoteWindow(false);
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
        console.log('Analytics');
        handleClose();
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
               
                    <MenuItem
                        data-test={TweetSelectors.DELETE_TWEET} onClick={handleDelete}
                        className="delete-option"
                        sx={{
                            color: 'red',
                            fontWeight: '600',
                        }}
                    >
                        <DeleteOutlineIcon />
                        Repost
                    </MenuItem>
                    <MenuItem
                        data-test={TweetSelectors.DELETE_TWEET} onClick={handleDelete}
                        className="delete-option"
                        sx={{
                            color: 'red',
                            fontWeight: '600',
                        }}
                    >
                        <DeleteOutlineIcon />
                        Quote
                    </MenuItem>
             
            
            </Menu>
            {/* <DeleteTweetWindow
                open={isQuoteWindow}
                closeHandler={closeDeleteWindowHandler}
                deleteTweet={deleteTweetHandler}
            /> */}
        </div>
    );
}

export { tweetRepostPopDown };
