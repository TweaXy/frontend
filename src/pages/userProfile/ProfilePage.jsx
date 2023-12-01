import { useState } from 'react';
import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Profile from '../../components/userProfile_components/Profile';
import Widget from '../../components/homePage_components/Widget';
import { useLocation } from 'react-router';

function ProfilePage() {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log('user data from profile page:', userData);
 
    return (
        <>
            <div className="home-page">
                {/**Side bar */}
                <Sidebar />
                {/**News feed */}

                <Profile user={userData.userData.user} token={userData.token} />

                {/**Widgets */}

                <Widget />
            </div>
        </>
    );
}

export default ProfilePage;
