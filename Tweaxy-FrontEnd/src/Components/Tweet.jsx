
import { useState } from "react";
import AvatarBox from "./AvatarBox";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import './Tweet.css'

export default function Tweet({avatar,username,handle,uploadTime,tweetText,likes,comments,reposts,insights}){
    const [tweetLikes,setTweetLikes]=useState(likes);
    const [tweetComments,setTweetComments]=useState(comments);
    const [tweetReposts,setTweetReposts]=useState(reposts);
    const[tweetInsights,setTweet]=useState(insights);

    // we should have a function to handle the change on clicking any
    return(
    <div className="tweet">
        <div className="repost"></div>
        <div className="tweet-container">
        <div className="avatar-container">
        {/* avatar */}
        <AvatarBox img={avatar}/>
        </div>
        <div className="tweet-main">
        <div className="tweet-user">
        <div className="info-container">
        <span className="username">{username}</span>
        <span className="handle">&nbsp;{`@${handle}`}</span>
        <div className="dot-container">
            <span className="dot">.</span>
        </div>
        <span>{uploadTime}</span>
        </div>
        <div className="options-container">
        <MoreHorizIcon/>
        </div>

        </div>
        <div className="tweet-text-container">
        <span className="tweet-text">{tweetText}</span>
        </div>
        {/* {tweetMedia&& <div className="tweet-media-container">
            
        </div>
         */}
        <div className="tweet-activity">
            <div className="tweet-icon">
                {/* icon */}
                <ChatBubbleOutlineOutlinedIcon/>
                <span className="icon-interaction">
                    <span className="interaction">
                    {`${tweetComments}`}
                    </span>
                </span>
            </div>
           
            <div className="tweet-icon">
                {/* icon */}
                < CachedOutlinedIcon/>
                <span className="icon-interaction">
                    <span className="interaction">
                    {`${tweetReposts}`}
                    </span>
                </span>
            </div>
            
            <div className="tweet-icon">
                {/* icon */}
                < FavoriteBorderOutlinedIcon/>
                <span className="icon-interaction">
                    <span className="interaction">
                    {`${tweetLikes}`}
                    </span>
                </span>
            </div>

            
            <div className="tweet-icon">
                {/* icon */}
                < BarChartOutlinedIcon/>
                <span className="icon-interaction">
                    <span className="interaction">
                    {`${tweetInsights}`}
                    </span>
                </span>
            </div>
            <div className="side-icon">
            <BookmarkBorderOutlinedIcon/>
                </div>
                <div className="side-icon">
                <FileUploadOutlinedIcon/>
                </div>
        </div>
        </div>
    </div>
    </div>
    
);}