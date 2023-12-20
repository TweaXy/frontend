import ProfileHeader from './ProfileHeader';
import './Profile.css';
import '../homePage_components/Feed.css';
import ProfileBio from './ProfileBio';
import { useState } from 'react';
import TabsProfile from './tabsProfile';
import getUserDataApi from '../../apis/getProfileData';
import { Button, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
function Profile({ token, userID, currUserId }) {
    const [ndata, setData] = useState('');
    const [isPageLoading, setIsPageLoading] = useState(true);

    const [viewPosts, setViewPosts] = useState(false);

    const viewPostsHandler = () => {
        setViewPosts(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getUserDataApi({
                    id: userID,
                    token: token,
                });
                setData(fetchedData);
                setViewPosts(!fetchedData.data.user.blockedByMe);
            } catch (error) {
                console.log('Failed With Error', error.message);
            } finally {
                setIsPageLoading(false);
            }
        };
        setIsPageLoading(true);
        fetchData();
    }, []);
    if (isPageLoading) {
        return (
            <div className="circular-progress-spinner">
                <CircularProgress />
            </div>
        );
    }
    return (
        <>
            <div className="feed">
                <div className="profile">
                    <ProfileHeader
                        username={ndata.data.user.name}
                        noPosts={0}
                    />
                    <ProfileBio
                        currUserId={currUserId}
                        IdProfile={ndata.data.user.id}
                        name={ndata.data.user.name}
                        username={ndata.data.user.username}
                        followingNum={ndata.data.user._count.following}
                        followersNum={ndata.data.user._count.followedBy}
                        bio={ndata.data.user.bio}
                        website={ndata.data.user.website}
                        location={ndata.data.user.location}
                        ProfileImage={ndata.data.user.avatar}
                        token={token}
                        JoinedAt={ndata.data.user.joinedDate}
                        followedByMe={ndata.data.user.followedByMe}
                        blockedByMe={ndata.data.user.blockedByMe}
                        blocksMe={ndata.data.user.blocksMe}
                        viewTweets={viewPosts}
                    />
                    {ndata.data.user.blocksMe ? (
                        <div className="user-blocked-container">
                            <div className="span-container">
                                <span className="header-span">
                                    You're blocked
                                </span>
                                <span className="body-span">
                                    {`You can't follow or see @${ndata.data.user.username}'s posts.`}
                                </span>
                            </div>
                        </div>
                    ) : viewPosts !== true ? (
                        <div className="user-is-blocked-container">
                            <div className="span-container">
                                <span className="header-span">
                                    {`@${ndata.data.user.username} is blocked`}
                                </span>
                                <span className="body-span">
                                    {`Are you sure you want to view these posts? Viewing posts won't unblock @${ndata.data.user.username}. `}
                                </span>
                                <Button
                                    variant="outlined"
                                    className="view-posts-btn"
                                    onClick={viewPostsHandler}
                                    sx={{ lineHeight: 2.2, fontSize: 17 }}
                                >
                                    View posts
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <TabsProfile
                            userData={ndata.data.user}
                            userID={userID}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Profile;
