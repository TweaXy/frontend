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
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import getUserDataApi from '../../apis/getProfileData';
const RepliesPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const userData = useSelector((state) => state.user.user);
    const [replies, setreplies] = useState([]);
    const tweetid = location.state?.tweetId;
    const [curtweet, settweet] = useState([]);
    const [render, setrender] = useState(false);
    const [ftime, setftime] = useState(true);
    const [avatar, setavatar] = useState(null);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const removeTweet = (tweetId) => {
        apiDeleteTweet(tweetid, token);
        setTweets((prevTweets) =>
            prevTweets.filter((tweet) => tweet.mainInteraction.id !== tweetId)
        );
    };
    const previouspage = (event) => {
        event.stopPropagation();
        navigate(-1);
    };
    useEffect(() => {
        if (token && curtweet && tweetid && userData) {
            fetchreplies();
            fetchData();
        }
    }, [token, tweetid, userData, render]);
    const fetchData = async () => {
        try {
            const fetchedData = await getUserDataApi({
                id: userData.id,
                token: token,
            });
            setavatar(fetchedData.data.user.avatar);
        } catch (error) {
            console.log('Failed With Error', error.message);
        }
    };
    const fetchreplies = async () => {
        setIsPageLoading(true);
        try {
            const fetchedreplies = await Getreplies(token, tweetid, 10, 0);

            setreplies(fetchedreplies.interactions);
            settweet(fetchedreplies.parent);
            console.log('the fetched replies are ', fetchedreplies);
            if (!ftime) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 200);
                });
            } else setftime(false);
            setIsPageLoading(false);
        } catch (error) {
            console.error('Error fetching replies:', error);
        }
    };
    if (isPageLoading) {
        return <LoadingPage />;
    }
    return (
        <>
            <div className="home-page">
                <Sidebar
                    userData={{
                        user: userData,
                        token: token,
                    }}
                    active={-1}
                    avatar={avatar}
                />
                <div className="feed">
                    <ReplyHeader previouspage={previouspage} />
                    <TweetReply
                        tweet={curtweet}
                        token={token}
                        userData={userData}
                    />
                    <TweetReplyBox
                        tweet={curtweet}
                        token={token}
                        setrender={setrender}
                        avatar={avatar}
                    />
                    {replies.length > 0 &&
                        replies.map((curreply, index) => (
                            <Tweet
                                key={index}
                                tweet={curreply}
                                removeTweet={removeTweet}
                                token={token}
                                followedByMe={
                                    curreply.mainInteraction.user.followedByMe
                                }
                                isCurrentUserTweet={
                                    userData.id ==
                                    curreply.mainInteraction.user.id
                                }
                            ></Tweet>
                        ))}
                </div>
                <Widget />
            </div>
        </>
    );
};
export default RepliesPage;
