import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Profile from '../../components/userProfile_components/Profile';
import Widget from '../../components/homePage_components/Widget';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const mapStateToProps = (state) => ({
    userData: state.user,
});

const ProfilePage = connect(mapStateToProps)(({ userData }) => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        if (userData) {
            setIsPageLoading(false);
            console.log('user data from profile page', userData);
        } else {
            console.log('profile page is loading');
        }
    }, [userData]);

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
                <Sidebar />
                <Profile />
                <Widget />
            </div>
        </>
    );
});

export default ProfilePage;
