import './MentionsPage.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { apiDeleteTweet } from '../../apis/tweetApis/deleteTweet';
import NotificationHeader from '../../components/Notifications/NotificationsHeader';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Sidebar from '../../components/homePage_components/Sidebar';
import Widget from '../../components/homePage_components/Widget';
import Tweet from '../../components/homePage_components/Tweet';
import NotifyBox from '../../components/NotifyBox/NotifyBox';
import getUserMentions from '../../apis/getUserMentions';

const MentionsPage = () => {
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const [userMentions, setUserMentions] = useState([]);

    const [actionMessage, setActionMessage] = useState('');
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        if (user && token) {
            setIsPageLoading(false);
        }
    }, [user, token]);

    const removeTweet = (tweetId) => {
        apiDeleteTweet(tweetId, token);
        setActionMessage('your tweet is deleted successfully');
        const timeoutId = setTimeout(() => {
            setActionMessage('');
        }, 3000);
        setUserMentions(
            userMentions.filter((tweet) => tweet.mainInteraction.id !== tweetId)
        );
        return () => clearTimeout(timeoutId);
    };

    const handleTweetsFiltering = (message, filterID) => {
        setActionMessage(message);
        const timeoutId = setTimeout(() => {
            setActionMessage('');
        }, 3000);
        setUserMentions(
            userMentions.filter(
                (tweet) => tweet.mainInteraction.user.id !== filterID
            )
        );
        return () => clearTimeout(timeoutId);
    };

    useEffect(() => {
        const getCurUserMentions = async () => {
            try {
                const curUserMentions = await getUserMentions(user.id, token);
                setUserMentions(curUserMentions);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (!isPageLoading) {
            getCurUserMentions();
        }
    }, [isPageLoading, token, user]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="mentions-page-container">
            <Sidebar userData={{ user, token }} active={3} />
            <div className="mentions-feed">
                <NotificationHeader activePage={1} />
                {userMentions.map((tweet) => {
                    return (
                        <Tweet
                            key={tweet.mainInteraction.id}
                            avatar={tweet.mainInteraction.user.avatar}
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
                                user.id == tweet.mainInteraction.user.id
                            }
                            handleTweetsFiltering={handleTweetsFiltering}
                            followedByMe={true}
                            tweet={tweet}
                        />
                    );
                })}
            </div>
            <Widget />
            {actionMessage.length !== 0 && <NotifyBox text={actionMessage} />}
        </div>
    );
};

export default MentionsPage;
