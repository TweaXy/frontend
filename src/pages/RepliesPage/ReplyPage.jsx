import { useSelector } from 'react-redux';
import { useState } from 'react';
import Sidebar from '../../components/homePage_components/Sidebar';
import '../HomePage/HomePage.css';
import '../../components/homePage_components/Feed.css';
import NotificationHeader from '../../components/Notifications/NotificationsHeader';
import { CircularProgress } from '@mui/material';
import Widget from '../../components/homePage_components/Widget';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TweetReply from '../../components/Reply/TweetReply';
import ReplyBox from '../../components/homePage_components/ReplyBox';
import '../../components/homePage_components/Feed.css';
import ReplyHeader from '../../components/Reply/ReplyHeader';
import Getreplies from '../../apis/Replies';
import TweetReplyBox from '../../components/Reply/TweetReplyBox';
import Tweet from '../../components/homePage_components/Tweet';
import { apiDeleteTweet } from '../../apis/tweetApis/deleteTweet';
const RepliesPage = () => {

    const navigate=useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const [replies, setreplies] = useState([]);
    const tweetid = location.state?.tweetId;
    const curtweet = location.state?.curtweet;
    console.log('Tweet id from replies page=', tweetid);
    console.log('Tweet from replies page=', curtweet);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const removeTweet = (tweetId) => {
        apiDeleteTweet(tweetid, token);
        setTweets((prevTweets) =>
            prevTweets.filter((tweet) => tweet.mainInteraction.id !== tweetId)
        );
    };
    const previouspage = () => {
        console.log("error")
        navigate(-1);
      };
    useEffect(() => {
        const fetchreplies = async () => {
            if (token && curtweet && tweetid) {
                try {
                    const fetchedreplies = await Getreplies(
                        token,
                        tweetid,
                        10,
                        0
                    );
                    setreplies(fetchedreplies);
                    console.log('the fetched replies are ', fetchedreplies);
                    setIsPageLoading(false);
                } catch (error) {
                    console.error('Error fetching replies:', error);
                }
            }
        };
        fetchreplies();
    }, [token, tweetid, curtweet]);
    if (isPageLoading) {
        return (
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </div>
        );
    }
    return (
        <>
            <div className="home-page">
                <Sidebar
                    userData={{
                        user: curtweet.mainInteraction.user,
                        token: token,
                    }}
                    active={-1}
                />
                <div className="feed">
                    <ReplyHeader previouspage={previouspage}/>
                    <TweetReply tweet={curtweet} />
                    <TweetReplyBox  />
                    {replies.length > 0 &&
                        replies.map((curreply, index) => (
                            <Tweet
                                avatar={curreply.mainInteraction.avatar}
                                username={curreply.mainInteraction.user.name}
                                handle={curreply.mainInteraction.user.username}
                                uploadTime={
                                    curreply.mainInteraction.createdDate
                                }
                                tweetText={curreply.mainInteraction.text}
                                tweetMedia={curreply.mainInteraction.media}
                                replies={curreply.mainInteraction.commentsCount}
                                reposts={curreply.mainInteraction.retweetsCount}
                                likes={curreply.mainInteraction.likesCount}
                                insights={curreply.mainInteraction.viewsCount}
                                tweetId={curreply.mainInteraction.id}
                                isUserLiked={
                                    curreply.mainInteraction.isUserInteract
                                        .isUserLiked
                                }
                                token={token}
                                userID={curreply.mainInteraction.user.id}
                                removeTweet={removeTweet}
                                isCurrentUserTweet={
                                    curtweet.mainInteraction.user.id ==
                                    curreply.mainInteraction.user.id
                                }
                                tweet={curreply}
                            ></Tweet>
                        ))}
                </div>
                <Widget />
            </div>
        </>
    );
};
export default RepliesPage;
