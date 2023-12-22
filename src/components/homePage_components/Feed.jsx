import './Feed.css';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef, useCallback } from 'react';
import { apiDeleteTweet } from '../../apis/tweetApis/deleteTweet';
// import useGetTweets from '../../apis/timelineApis/useGetTweets';
import NotifyBox from '../../components/NotifyBox/NotifyBox';
import LoadingPage from '../LoadingPage/LoadingPage';
import FeedHeader from './FeedHeader';
import TweetBox from './TweetBox';
import Tweet from './Tweet';

const Feed = ({ userData, isTherePopUpWindow }) => {
    const token = useSelector((state) => state.user.token);

    const [offset, setOffset] = useState(0);
    // const { tweets, hasMore, loading, error } = useGetTweets(token, offset);

    const [loading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const [actionMessage, setActionMessage] = useState('');

    const removeTweet = (tweetId) => {
        apiDeleteTweet(tweetId, token);
        setTweets(
            tweets.filter((tweet) => tweet.mainInteraction.id !== tweetId)
        );
    };

    const updateOffset = (newOffest) => {
        setOffset(newOffest);
    };

    const observer = useRef();

    const lastTweetElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setOffset((prevOffset) => prevOffset + 10);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const handleTweetsFiltering = (message, filterID) => {
        setActionMessage(message);
        const timeoutId = setTimeout(() => {
            setActionMessage('');
        }, 3000);
        setTweets(
            tweets.filter((tweet) => tweet.mainInteraction.user.id !== filterID)
        );
        return () => clearTimeout(timeoutId);
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const lnk = `https://tweaxybackend.mywire.org/api/v1/home?limit=10&offset=${offset}`;
            try {
                const response = await fetch(lnk, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                const responseData = await response.json();
                if (responseData.status != 'success') {
                    // DO NOTHING
                } else {
                    setTweets((prevTweets) => {
                        setLoading(false);
                        return [...prevTweets, ...responseData.data.items];
                    });
                    setHasMore(responseData.data.items.length > 0);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, [token, offset]);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="feed">
            <FeedHeader
                feedHeader_acitve={0}
                isTherePopUpWindow={isTherePopUpWindow}
            />

            <TweetBox userData={userData} updateOffset={updateOffset} />

            {tweets.map((tweet, index) => {
                if (tweets.length <= index + 3) {
                    return (
                        <Tweet
                            key={index}
                            ref={lastTweetElementRef}
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
                                userData.user.id ==
                                tweet.mainInteraction.user.id
                            }
                            handleTweetsFiltering={handleTweetsFiltering}
                            followedByMe={true}
                        />
                    );
                } else {
                    return (
                        <Tweet
                            key={index}
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
                                userData.user.id ==
                                tweet.mainInteraction.user.id
                            }
                            handleTweetsFiltering={handleTweetsFiltering}
                            followedByMe={true}
                        />
                    );
                }
            })}
            {actionMessage.length !== 0 && <NotifyBox text={actionMessage} />}
        </div>
    );
};

export { Feed };
