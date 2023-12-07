import '../homePage_components/Feed.css';
import Tweet from '../homePage_components/Tweet';
import GetTweetsuserLikes from '../../apis/tweetApis/UserLikedTweets';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const TweetsUSerLikes = () => {
    const [tweets, setTweets] = useState([]);
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);
    const getTweets = async () => {
        const tweetsResponse = await GetTweetsuserLikes(user.id, token, 10, 0);
        console.log('Tweets User Likes response', tweetsResponse);
        setTweets(tweetsResponse);
    };
    useEffect(() => {
        getTweets();
    }, []);
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
