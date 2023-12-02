import ProfileHeader from './ProfileHeader';
import './Profile.css';
import ProfileBio from './ProfileBio';
import { useState } from 'react';
import TabsProfile from './tabsProfile';

function Profile({ token, user }) {
  const [isWindowOpen, setIsWindowOpen] = useState(location.state?.firstTime);
  console.log(user);
  console.log(token);
    return (
        <>
            <div className="profile">
                <ProfileHeader username={user.name} noPosts={0} />
                <ProfileBio
                    name={user.name}
                    username={user.username}
                    followingNum={1}
                    followersNum={1}
                    bio={''}
                    ProfileImage={user.avatar}
                   token={token}
                />
              <TabsProfile userData={user}  />
            </div>
        </>
    );
}

export default Profile;
