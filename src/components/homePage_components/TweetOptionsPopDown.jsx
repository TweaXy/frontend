import './TweetOptionsPopDown.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import BlockIcon from '@mui/icons-material/Block';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteTweetWindow from './DeleteTweetWindow'
import { useState } from 'react';

function TweetOptionsPopDown({ isCurrentUserTweet, handleClose, anchorEl,deleteTweetHandler }) {
    const [isDeleteWindow,setIsDeleteWindow]=useState(false);
    const handleDelete = () => {
        // Implement delete functionality here
        setIsDeleteWindow(true);
        console.log('Deleting tweet...');
        handleClose();
    };
    const closeDeleteWindowHandler = ()=>{
        setIsDeleteWindow(false);
    }
    const handlePin = (e) => {
        console.log('pinned');
        handleClose();
    };

    return (
        <div className="tweet-options">
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              
            >
                <MenuItem onClick={handleDelete} className='delete-option'
                sx={
                    {
                        color:"red",
                        fontWeight:"600"
                    }
                }
                >
                    <DeleteOutlineIcon />
                    Delete
                </MenuItem>
                {/* <MenuItem onClick={handlePin}>
                    <PushPinOutlinedIcon />
                    Pin to your profile
                </MenuItem> */}
                {/* <MenuItem onClick={handlePin}>
                    <ChatBubbleOutlineOutlinedIcon />
                    Change who can reply
                </MenuItem> */}
                <MenuItem onClick={handlePin}>
                    <BarChartOutlinedIcon />
                    View post analytics
                </MenuItem>
            </Menu>
            <DeleteTweetWindow open={isDeleteWindow} closeHandler={closeDeleteWindowHandler} deleteTweet={deleteTweetHandler} />
        </div>
    );
}

export { TweetOptionsPopDown };
