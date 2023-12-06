// import './app.css'
import { useState, useEffect, useRef } from 'react';
import AvatarBox from './AvatarBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Tweet.css';
import MediaChecker from './MediaChecker';
import { Padding } from '@mui/icons-material';
import { apiLikeTweet , apiDislikeTweet} from '../../apis/tweetApis/LikeTweet';
import e from 'cors';
import { token } from 'stylis';
export default function Tweet({
    avatar,
    username,
    handle,
    uploadTime,
    tweetText,
    tweetMedia,
    likes,
    replies,
    reposts,
    insights,
    tweetId,
    isUserLiked,
    userData//temproray until we solve the token issue and then can be exported globally
}) {
    const [tweetLikes, setTweetLikes] = useState(likes);
    const [tweetReplies, setTweetComments] = useState(replies);
    const [tweetReposts, setTweetReposts] = useState(reposts);
    const [tweetInsights, setTweet] = useState(insights);
    const [isLikeActive,setLikeActive] =useState(isUserLiked);
    const activityIcon1 = useRef(null);
    const activityIcon2 = useRef(null);
    const activityIcon3 = useRef(null);
    const activityIcon4 = useRef(null);
    const iconInteraction1 = useRef(null);
    const iconInteraction2 = useRef(null);
    const iconInteraction3 = useRef(null);
    const iconInteraction4 = useRef(null);
    useEffect(() => {
        // adjust this to be useRef

        const activityIcons = [
            activityIcon1.current,
            activityIcon2.current,
            activityIcon3.current,
            activityIcon4.current,
        ];
        const iconInteractions = [
            iconInteraction1.current,
            iconInteraction2.current,
            iconInteraction3.current,
            iconInteraction4.current,
        ]; // Added a dot before 'icon-interaction'
        const icons = [
            activityIcon1.current.querySelector('.MuiSvgIcon-root'),
            activityIcon2.current.querySelector('.MuiSvgIcon-root'),
            activityIcon3.current.querySelector('.MuiSvgIcon-root'),
            activityIcon4.current.querySelector('.MuiSvgIcon-root'),
        ];

        activityIcons.forEach((activityIcon, index) => {
            activityIcon.addEventListener('mouseover', () => {
                activityIcon.style.borderRadius = '50%';
                switch (index) {
                    case 1:
                        icons[index].style.color = 'var(--twitter-greenColor)';
                        iconInteractions[index].style.color =
                            'var(--twitter-greenColor)';
                        activityIcon.style.backgroundColor =
                            'var(--twitter-greenHover)';
                        break;
                    case 2:
                        icons[index].style.color = 'var(--twitter-redColor)';
                        iconInteractions[index].style.color =
                            'var(--twitter-redColor)';
                        activityIcon.style.backgroundColor =
                            'var(--twitter-redHover)';
                        break;
                    default:
                        icons[index].style.color = 'var(--twitter-color)';
                        iconInteractions[index].style.color =
                            'var(--twitter-color)';
                        activityIcon.style.backgroundColor =
                            'var(--twitter-cianHover)';
                        break;
                }
                activityIcon.style.transition =
                    'background-color 200ms ease-out';
            });

            activityIcon.addEventListener('mouseleave', () => {
                // Reset styles when mouse leaves
                activityIcon.style.backgroundColor = ''; // Set to the default or remove this line if not needed
                activityIcon.style.borderRadius = '';
                if(!(index==2&&isLikeActive)){
                icons[index].style.color = 'var(--twitter-greyColor)';
                iconInteractions[index].style.color = '';
                }
                activityIcon.style.transition = '';
            });
        });

        iconInteractions.forEach((iconInteraction, index) => {
            iconInteraction.addEventListener('mouseover', () => {
                switch (index) {
                    case 1:
                        icons[index].style.color = 'var(--twitter-greenColor)';
                        iconInteraction.style.color =
                            'var(--twitter-greenColor)';
                        activityIcons[index].style.backgroundColor =
                            'var(--twitter-greenHover)';
                        break;
                    case 2:
                        icons[index].style.color = 'var(--twitter-redColor)';
                        iconInteraction.style.color = 'var(--twitter-redColor)';
                        activityIcons[index].style.backgroundColor =
                            'var(--twitter-redHover)';
                        break;
                    default:
                        icons[index].style.color = 'var(--twitter-color)';
                        iconInteraction.style.color = 'var(--twitter-color)';
                        activityIcons[index].style.backgroundColor =
                            'var(--twitter-cianHover)';
                        break;
                }
                activityIcons[index].style.borderRadius = '50%';
                activityIcons[index].style.transition =
                    'background-color 200ms ease-out';
            });

            iconInteraction.addEventListener('mouseleave', () => {
                activityIcons[index].style.backgroundColor = '';
                activityIcons[index].style.borderRadius = '';
                if(!(index==2&&isLikeActive)){
                iconInteraction.style.color = '';
                icons[index].style.color = 'var(--twitter-greyColor)';
                }
                activityIcons[index].style.transition = '';
            });
        });
    }, []);

    const likeDislikeTweetHandler = (e) =>{
        //call api likeDislikeTweetHandler
        if(isLikeActive){
            //dislike it 
            apiDislikeTweet(tweetId,userData.token);
        } else {
            //like it 
            apiLikeTweet(tweetId,userData.token);
        }
        setLikeActive(!isLikeActive);
    }

    // we should have a function to handle the change on clicking any
    return (
        <div className="tweet">
            <div className="repost"></div>
            <div className="tweet-container">
                <div className="avatar-container">
                    {/* avatar */}
                    <AvatarBox img={avatar} />
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
                        <div className="options-container cian-hover">
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <div className="tweet-text-container">
                        <span className="tweet-text">{tweetText}</span>
                    </div>
                    <div className="tweet-media-container">
                        {/* {!tweetMedia &&  <img src="" alt="test" />} */}
                        {tweetMedia && [tweetMedia].length > 0 && (
                            <div style={{ height: '10px' }}></div>
                        )}

                        {tweetMedia && [tweetMedia].length > 0 && (
                            <MediaChecker media={[tweetMedia]} />
                        )}
                    </div>

                    <div className="tweet-activity">
                        <div className="tweet-icon">
                            {/* icon */}
                            <div className="activity-icon" ref={activityIcon1}>
                                <ChatBubbleOutlineOutlinedIcon className="" />
                            </div>
                            <span
                                className="icon-interaction"
                                ref={iconInteraction1}
                            >
                                <span className="interaction">
                                    {tweetReplies != 0 && `${tweetReplies}`}
                                </span>
                            </span>
                        </div>

                        <div className="tweet-icon">
                            {/* icon */}
                            <div className="activity-icon" ref={activityIcon2}>
                                <CachedOutlinedIcon />
                            </div>
                            <span
                                className="icon-interaction"
                                ref={iconInteraction2}
                            >
                                <span className="interaction">
                                    {tweetReposts != 0 && `${tweetReposts}`}
                                </span>
                            </span>
                        </div>

                        <div className="tweet-icon">
                            {/* icon */}
                            <div className="activity-icon" ref={activityIcon3} onClick={likeDislikeTweetHandler}>
                                {!isLikeActive && <FavoriteBorderOutlinedIcon/>}
                                {isLikeActive && <FavoriteIcon className='like-active'/>}
                            </div>
                            <span
                                className="icon-interaction"
                                ref={iconInteraction3}
                                onClick={likeDislikeTweetHandler}
                            >
                                <span className="interaction">
                                    {tweetLikes != 0 && `${tweetLikes}`}
                                </span>
                            </span>
                        </div>

                        <div className="tweet-icon">
                            {/* icon */}
                            <div className="activity-icon" ref={activityIcon4}>
                                <BarChartOutlinedIcon />
                            </div>
                            <span
                                className="icon-interaction"
                                ref={iconInteraction4}
                            >
                                <span className="interaction">
                                    {tweetInsights != 0 && `${tweetInsights}`}
                                </span>
                            </span>
                        </div>
                        <div className="side-icon bookmark">
                            <BookmarkBorderOutlinedIcon />
                        </div>
                        <div className="side-icon">
                            <FileUploadOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
