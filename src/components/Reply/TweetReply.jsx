    import { useState, useEffect, useRef } from 'react';
    import AvatarBox from '../../components/homePage_components/AvatarBox';
    import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
    import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
    import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
    import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
    import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import './Reply.css'
    import MediaChecker from '../../components/homePage_components//MediaChecker';
    import { apiLikeTweet, apiDislikeTweet } from '../../apis/tweetApis/LikeTweet';
    import TweetDate from '../../utils/TweetDate';
    import { useNavigate } from 'react-router-dom';
    import { TweetOptionsPopDown } from '../homePage_components/TweetOptionsPopDown';   
    import { format } from 'date-fns';
    import { apiAddReply } from '../../apis/tweetApis/AddReply';
import AddReplyWindow from '../homePage_components/AddReplyWindow';
    export default function TweetReply({
        tweet,
        token,
        userData
    }) {
        const navigate=useNavigate();
        const avatar=tweet.mainInteraction.user.avatar
        const name=tweet.mainInteraction.user.name
        const username=tweet.mainInteraction.user.username
        const UploadTime=tweet.mainInteraction.createdDate
        const uploadTime = format(new Date(UploadTime), "h:mm a · MMM d, yyyy");
        const replaytext=tweet.mainInteraction.text;
        const tweetMedia=tweet.mainInteraction.media;
        const likes=tweet.mainInteraction.likesCount;
        const replies=tweet.mainInteraction.commentsCount;
        const reposts=tweet.mainInteraction.retweetsCount
        const insights=tweet.mainInteraction.viewsCount;
        const isUserLiked=tweet.mainInteraction.isUserInteract.isUserLiked;
        const [tweetLikes, setTweetLikes] = useState(likes);
        const [tweetReplies, setTweetComments] = useState(replies);
        const [tweetReposts, setTweetReposts] = useState(reposts);
        const [tweetInsights, setTweet] = useState(insights);
        const [isLikeActive, setLikeActive] = useState(isUserLiked);
        const activityIcon1 = useRef(null);
        const activityIcon2 = useRef(null);
        const activityIcon3 = useRef(null);
        const activityIcon4 = useRef(null);
        const iconInteraction1 = useRef(null);
        const iconInteraction2 = useRef(null);
        const iconInteraction3 = useRef(null);
        const iconInteraction4 = useRef(null);
        const [isReplyWindow, setIsReplyWindow] = useState(false);
        const isCurrentUserTweet=tweet.mainInteraction.user.id==userData.id
        const routingHandlerProfile1 = (event) => {
            event.stopPropagation();
            console.log('routing to this user profile ');
            // navigate(`/profile/${curusername}`, { state: {userID:userID}})
        };
        const routingHandlerProfile2 = (event) => {
            event.stopPropagation();
            console.log('routing to this user profile ');
            // navigate(`/profile/${fromUser.name}`, { state: {userID:fromUser.id}})
        };
        const routingHandlerTweet = () => {
            console.log('routing to the tweet ');
            // navigate(`/profile/${fromUser.name}`, { state: {userID:fromUser.id}})
            //tweet-compontent
            // route to the tweet
        };
        const replyWindowClose = (event) => {
            event.stopPropagation();
            setIsReplyWindow(false);
        };
        const addReplyHandler = async ( text, images) => {
             apiAddReply(tweet.mainInteraction.id, text, images, token)
        };
        const replyWindowOpen = (event) => {
            event.stopPropagation();
            setIsReplyWindow(true);
        };
        const optionsCloseHandler = (event) => {
            event.stopPropagation();
            setAnchorEl(null);
        };
        const [anchorEl, setAnchorEl] = useState(null);
        const deleteTweetHandler = (event) => {
            event.stopPropagation();
            removeTweet(tweet.id);
        };
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
                    if (!(index == 2 && isLikeActive)) {
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
                    if (!(index == 2 && isLikeActive)) {
                        iconInteraction.style.color = '';
                        icons[index].style.color = 'var(--twitter-greyColor)';
                    }
                    activityIcons[index].style.transition = '';
                });
            });
        }, []);

        const likeDislikeTweetHandler = (e) => {
       
            if (isLikeActive) {
          
                apiDislikeTweet(tweet.mainInteraction.id, token);
                setTweetLikes((likes) => likes - 1);
            } else {
        
                apiLikeTweet(tweet.mainInteraction.id, token);
                setTweetLikes((likes) => likes + 1);
            }
            setLikeActive(!isLikeActive);
        };
        const optionsClickHandler = (event) => {
            event.stopPropagation();
            setAnchorEl(event.currentTarget);
        };  

        return (
            <>
            <div className="reply" onClick={routingHandlerTweet}>
                <div className="repost"></div>
                <div className="reply-container">
                    <div className="avatar-container-reply" style={{width:'52px',height:'40px'}}>
                        {/* avatar */}
                        <AvatarBox img={avatar} />
                    </div>
                    <div className="reply-main">
                        <div className="reply-user">
                            <div className="info-container">
                                <span className="username" onClick={routingHandlerProfile2}>{username}</span>
                            </div>
                            <div
                            className="options-container cian-hover"
                            onClick={optionsClickHandler}
                        >
                            <MoreHorizIcon />
                        </div> 
                        <div
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                            >
                                <TweetOptionsPopDown
                                    isCurrentUserTweet={isCurrentUserTweet}
                                    handleClose={optionsCloseHandler}
                                    anchorEl={anchorEl}
                                    deleteTweetHandler={deleteTweetHandler}
                                    tweetid={tweet.mainInteraction.id}
                                    token={token}
                                    username={username}
                                    userID={userData.id}
                                    handleTweetsFiltering={(msg, id) => {
                                        setAnchorEl(null);
                                        handleTweetsFiltering(msg, id);
                                    }}
                                    followedByMe={false}
                                />
                            </div>         
                        </div>
                            <span
                                className="TweetReply-container"
                                onClick={routingHandlerProfile1}
                            >
                                @{name}
                            </span>
                            </div>
                            </div>
                            <div className="reply-container">
                            <div className="reply-main">
                        <div className="reply-text-container">
                            <span className="reply-text">{replaytext}</span>
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
                        <div className="reply-text-container">
                            <span className="reply-Date">{uploadTime}</span>
                        </div>
                        <div className="reply-activity">
                            <div className="reply-icon">
                                {/* icon */}
                                <div className="activity-icon" ref={activityIcon1}    onClick={replyWindowOpen}>
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

                            <div className="reply-icon">
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

                            <div className="reply-icon">
                                <div
                                    className="activity-icon"
                                    ref={activityIcon3}
                                    onClick={likeDislikeTweetHandler}
                                >
                                    {!isLikeActive && (
                                        <FavoriteBorderOutlinedIcon />
                                    )}
                                    {isLikeActive != false && (
                                        <FavoriteIcon className="like-active" />
                                    )}
                                </div>
                                <span
                                    className="icon-interaction"
                                    ref={iconInteraction3}
                                    onClick={likeDislikeTweetHandler}
                                >
                                    <span className="interaction">
                                        {tweetLikes > 0 && `${tweetLikes}`}
                                    </span>
                                </span>
                            </div>

                            <div className="reply-icon">
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
                        </div>
                    </div>
                    </div>
                    </div>
                    {isReplyWindow && (
                        <AddReplyWindow
                            open={isReplyWindow}
                            closeHandler={replyWindowClose}
                            avatar={avatar}
                            username={name}
                            handle={username}
                            uploadTime={UploadTime}
                            tweetText={replaytext}
                            addReplyHandler={addReplyHandler}
                        />
                    )}
                    </>
        );
    }
