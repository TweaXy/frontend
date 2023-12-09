import '../homePage_components/Feed.css';
import Tweet from '../homePage_components/Tweet';
import GetTweetsuserLikes from '../../apis/tweetApis/UserLikedTweets';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
const TweetsUSerLikes = ({ userID }) => {
    const [tweets, setTweets] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const token = useSelector((state) => state.user.token);
    const getTweets = async () => {
        const tweetsResponse = await GetTweetsuserLikes(userID, token, 10, 0);
        console.log('Tweets User Likes response', tweetsResponse);
        setTweets(tweetsResponse);
    };
    useEffect(() => {
        if (token) {
            setIsPageLoading(false);
        } else {
            console.log('profile page is loading');
        }
    }, [token]);
    useEffect(() => {
        getTweets();
    }, [isPageLoading]);
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
            {tweets.length > 0 &&
                tweets.map((tweet, index) => (
                    <Tweet
                        avatar={tweet.mainInteraction.avatar}
                        username={tweet.mainInteraction.user.name}
                        handle={tweet.mainInteraction.user.username}
                        uploadTime={tweet.mainInteraction.createdDate}
                        tweetText={tweet.mainInteraction.text}
                        tweetMedia={tweet.mainInteraction.media}
                        replies={tweet.mainInteraction.commentsCount}
                        reposts={tweet.mainInteraction.retweetsCount}
                        likes={tweet.mainInteraction.likesCount}
                        insights={tweet.mainInteraction.viewsCount}
                    />
                ))}
        </>
    );
};
export default TweetsUSerLikes;
