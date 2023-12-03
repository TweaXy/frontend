import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Feed from '../../components/homePage_components/Feed';
import Widget from '../../components/homePage_components/Widget';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
const mapStateToProps = (state) => ({
    userData: state.user,
});
const HomePage = connect(mapStateToProps)(({ userData }) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    useEffect(() => {
        if (userData) {
            setIsPageLoading(false);
            console.log('user data from home page', userData);
        } else {
            console.log('Loading home page..');
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
                <Sidebar userData={userData} active={0} />
                <Feed userData={userData} isTherePopUpWindow={false} />
                <Widget token={userData.token} />
            </div>
        </>
    );
});
export default HomePage;