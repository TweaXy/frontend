import ProfileHeader from './ProfileHeader';
import './Profile.css';
import ProfileBio from './ProfileBio';
import { useState } from 'react';
import TabsProfile from './tabsProfile';
import getUserDataApi from '../../apis/getProfileData';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
function Profile({ token, user }) {
    const [ndata, setData] = useState('');
    const [isPageLoading, setIsPageLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getUserDataApi({
                    id: user.id,
                    token: token,
                });
                setData(fetchedData);
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
            <div className="profile">
                <ProfileHeader username={ndata.data.user.name} noPosts={0} />
                <ProfileBio
                    name={ndata.data.user.name}
                    username={ndata.data.user.username}
                    followingNum={ndata.data.user._count.following}
                    followersNum={ndata.data.user._count.followedBy}
                    bio={ndata.data.user.bio}
                    ProfileImage={ndata.data.user.avatar}
                    token={token}
                    JoinedAt={ndata.data.user.joinedDate}
                    /* ndata.data.user.joinedDate*/
                />
                {/*}  ndata.data.user.joinedDate
                 */}
                <TabsProfile userData={ndata.data.user} />
            </div>
        </>
    );
}

export default Profile;
