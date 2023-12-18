import '../homePage_components/Feed.css';
import Tweet from '../homePage_components/Tweet';
import GetuserTweets from '../../apis/tweetApis/UserTweet';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { apiDeleteTweet } from '../../apis/tweetApis/deleteTweet';
import React from 'react';
const UserTweets = ({ userID }) => {
    const [tweets, setTweets] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const token = useSelector((state) => state.user.token);
    const getTweets = async () => {
        const tweetsResponse = await GetuserTweets(userID, token, 10, 0);
        console.log('user tweet response', tweetsResponse);
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
        if (!isPageLoading) getTweets();
    }, [isPageLoading]);
    if (isPageLoading) {
        return (
            <div
            data-testid='loading-element'
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

    const removeTweet = (tweetId)=>{
        apiDeleteTweet(tweetId,token);
       setTweets((prevTweets) =>prevTweets.filter((tweet)=>tweet.mainInteraction.id!==tweetId));
      
   }
    return (
        <>
            {tweets&&tweets.length > 0 &&
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
                        tweetId={tweet.mainInteraction.id}
                        isUserLiked={
                            tweet.mainInteraction.isUserInteract.isUserLiked
                        }
                        token={token}
                        userID={tweet.mainInteraction.user.id}
                        removeTweet={removeTweet}
                        isCurrentUserTweet={userID==tweet.mainInteraction.user.id}
                    />
                ))}
        </>
    );
};
export default UserTweets;
