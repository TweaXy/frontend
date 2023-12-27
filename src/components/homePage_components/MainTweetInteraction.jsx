import AvatarBox from './AvatarBox';
import './MainTweetInteraction.css';
import './Avatar.css';
import Avatar from '@mui/material/Avatar';
import TweetDate from '../../utils/TweetDate';
import './MainTweetInteraction.css';
import TweetSelectors from '../../shared/selectors/Tweets';
export default function MainTweetInteraction({
    avatar,
    username,
    handle,
    uploadTime,
    tweetText,
}) {
    return (
        <div className="main-tweet-interaction">
            <div className="tweet-container">
                <div className="avatar-container ">
                    <div className="avatar-box">
                        <Avatar
                            src={`https://tweaxybackend.mywire.org/api/v1/images/${avatar}`}
                        ></Avatar>
                    </div>
                    <div className="avatar-line"></div>
                </div>
                <div className="tweet-main">
                    <div className="tweet-user">
                        <div className="info-container">
                            <span className="handle">&nbsp;{`@${handle}`}</span>
                            <div className="dot-container">
                                <span className="dot">.</span>
                            </div>
                            <span className="profileBiography-joinDate">
                                {TweetDate(uploadTime)}
                            </span>
                        </div>
                    </div>
                    <div data-test={TweetSelectors.tweetText} className="tweet-text-container">
                        <span className="tweet-text">{tweetText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
