import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Profile from '../../components/userProfile_components/Profile';
import Widget from '../../components/homePage_components/Widget';
import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import getUserDataApi from '../../apis/getProfileData';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const location = useLocation();
    const userID = location.state?.userID;

    const token = useSelector((state) => state.user.token);

    console.log('token from profile: ', token);
    console.log('user id from profile:', userID);

    useEffect(() => {
        if (token && userID) {
            setIsPageLoading(false);
            console.log('user id from profile page', userID);
            console.log('user token from profile page', token);
        } else {
            console.log('profile page is loading');
        }
    }, [token, userID]);

    if (isPageLoading) {
        return (
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <div className="home-page">
                {/**Side bar */}
                <Sidebar active={1} />
                {/**News feed */}

                <Profile token={token} userID={userID} />

                {/**Widgets */}
                <Widget token={token} />
            </div>
        </>
    );
};

export default ProfilePage;
