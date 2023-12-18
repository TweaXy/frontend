import './Feed.css';
import FeedHeader from './FeedHeader';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import { apiGetTweet } from '../../apis/timelineApis/getTweets';
import { apiDeleteTweet } from '../../apis/tweetApis/deleteTweet';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useGetTweets from '../../apis/timelineApis/useGetTweets';
import LoadingPage from '../LoadingPage/LoadingPage';

const Feed = ({ userData, isTherePopUpWindow }) => {
    const [tweets, setTweets] = useState([]);  
    const [offset, setOffset] = useState(0);
    const token = useSelector((state) => state.user.token);
  
    const getTweets = async () => {
        const tweetsResponse = await apiGetTweet(userData.token);

        setTweets(tweetsResponse);

    };
    const removeTweet = (tweetId)=>{
         apiDeleteTweet(tweetId,token);
        setTweets((prevTweets) =>prevTweets.filter((tweet)=>tweet.mainInteraction.id!==tweetId));
       
    }
    useEffect( () => {   
         getTweets();
  

    }, []);

    return (
        <div className="feed">
            <FeedHeader
                feedHeader_acitve={0}
                isTherePopUpWindow={isTherePopUpWindow}
            />
                  
            <TweetBox userData={userData} getTweets={getTweets} />

            {tweets.length > 0 &&
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
                        token={userData.token}
                        userID={tweet.mainInteraction.user.id}
                        removeTweet={removeTweet}
                        isCurrentUserTweet={
                            userData.user.id == tweet.mainInteraction.user.id
                        }
                    />
                ))}

        </div>
    );
};

export { Feed };
