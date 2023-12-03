import ProfileHeader from './ProfileHeader';
import './Profile.css';
import ProfileBio from './ProfileBio';
import { useState } from 'react';
import TabsProfile from './tabsProfile';
import getUserDataApi from '../../apis/getProfileData';
import { useEffect } from 'react';
function Profile({ token, user }) {
    const [ndata, setData] = useState('');
useEffect(()=>{
    const fetchData = async () => {
        const fetchedData = await getUserDataApi({ id: user.id, token: token });
        setData(fetchedData);
    };
    fetchData();
  },[])
    console.log('data from getuserdataApi', ndata);
    return (
        <>
            <div className="profile">
                <ProfileHeader username={user.name} noPosts={0} />
                <ProfileBio
                    name={user.name}
                    username={user.username}
                    followingNum={0}
                    /*ndata.data.user._count.following*/
                    followersNum={0}
                    /*ndata.data.user._count.followedBy*/
                    bio={''}
                    ProfileImage={user.avatar}
                    token={token}
                    JoinedAt={'December 2023'}
                    /* ndata.data.user.joinedDate*/
                />
                {/*}  ndata.data.user.joinedDate
                 */}
                <TabsProfile userData={user} />
            </div>
        </>
    );
}

export default Profile;
