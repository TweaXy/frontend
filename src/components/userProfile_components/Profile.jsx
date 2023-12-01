import ProfileHeader from './ProfileHeader';
import './Profile.css';
import ProfileBio from './ProfileBio';
import { useState } from 'react';

import TabsProfile from './tabsProfile';

function Profile({ token, userData }) {
  const [isWindowOpen, setIsWindowOpen] = useState(location.state?.firstTime);
  
    return (
        <>
            <div className="profile">
                <ProfileHeader username="ww" noPosts={0} />
                <ProfileBio
                    username="ww"
                    userEmail="ww"
                    followingNum={1}
                    followersNum={1}
                    bio={''}
                    
                   token={token}
                />
              <TabsProfile userData={userData}  />
            </div>
        </>
    );
}

export default Profile;
