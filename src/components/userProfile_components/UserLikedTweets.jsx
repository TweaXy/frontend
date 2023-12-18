import '../homePage_components/Feed.css';
import Tweet from '../homePage_components/Tweet';
import GetTweetsuserLikes from '../../apis/tweetApis/UserLikedTweets';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { apiDeleteTweet } from '../../apis/tweetApis/deleteTweet';
import React from 'react';
const TweetsUSerLikes = ({ userID, curUserID }) => {
    const [tweets, setTweets] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const token = useSelector((state) => state.user.token);
    const userdata = useSelector((state) => state.user.user);
    const getTweets = async () => {
        const tweetsResponse = await GetTweetsuserLikes(userID, token, 10, 0);
        console.log('Tweets User Likes response', tweetsResponse);
        setTweets(tweetsResponse);
    };
    useEffect(() => {
        if (token && userdata) {
            setIsPageLoading(false);
        } else {
            console.log('profile page is loading');
        }
    }, [token, userdata]);
    const removeTweet = (tweetId) => {
        apiDeleteTweet(tweetId, token);
        setTweets((prevTweets) =>
            prevTweets.filter((tweet) => tweet.mainInteraction.id !== tweetId)
        );
    };
    useEffect(() => {
        getTweets();
    }, [isPageLoading]);
    if (isPageLoading) {
        return (
            <div
                data-testid="loading-element"
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
            {tweets &&
                tweets.length > 0 &&
                tweets.map((tweet) => (
                    <Tweet
                        key={tweet.mainInteraction.id}
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
                        tweetId={tweet.mainInteraction.id}
                        isUserLiked={
                            tweet.mainInteraction.isUserInteract.isUserLiked
                        }
                        token={token}
                        userID={tweet.mainInteraction.user.id}
                        removeTweet={removeTweet}
                        isCurrentUserTweet={
                            curUserID === tweet.mainInteraction.user.id
                        }
                    />
                ))}
        </>
    );
};
export default TweetsUSerLikes;
