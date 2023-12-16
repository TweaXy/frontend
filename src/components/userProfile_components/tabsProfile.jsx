import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import '../userProfile_components/tabsProfile.css';
import UserTweets from './UserTweets';
import { useState } from 'react';
import TweetsUSerLikes from './UserLikedTweets';
const TabsProfile = ({ isTherePopUpWindow, userID, isUserMuted }) => {
    const [feedHeader_acitve, setActivePage] = useState(0);
    return (
        <>
            <div
                className={isTherePopUpWindow ? 'weak-feed-tabs' : 'feed-tabs'}
            >
                <div
                    style={{ flex: 0.2 }}
                    className="feed-haeder-element"
                    onClick={() => setActivePage(0)}
                >
                    <span
                        className={`${
                            feedHeader_acitve == 0 && '--feed-header-active'
                        }`}
                    >
                        Posts
                    </span>
                </div>
                <div
                    style={{ flex: 0.25 }}
                    className=" feed-haeder-element"
                    onClick={() => setActivePage(1)}
                >
                    <span
                        className={`${
                            feedHeader_acitve == 1 && '--feed-header-active'
                        }`}
                    >
                        Replies
                    </span>
                </div>

                <div
                    style={{ flex: 0.25 }}
                    className=" feed-haeder-element"
                    onClick={() => setActivePage(2)}
                >
                    <span
                        className={`${
                            feedHeader_acitve == 2 && '--feed-header-active'
                        }`}
                    >
                        Media
                    </span>
                </div>
                <div
                    style={{ flex: 0.25 }}
                    className=" feed-haeder-element"
                    onClick={() => setActivePage(3)}
                >
                    <span
                        className={`${
                            feedHeader_acitve == 3 && '--feed-header-active'
                        }`}
                    >
                        Likes
                    </span>
                </div>
            </div>
            {feedHeader_acitve === 0 && (
                <UserTweets userID={userID} isUserMuted={isUserMuted} />
            )}
            {feedHeader_acitve === 3 && (
                <TweetsUSerLikes userID={userID} />
            )}
        </>
    );
};
export default TabsProfile;
