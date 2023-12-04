import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Feed from '../../components/homePage_components/Feed';
import Widget from '../../components/homePage_components/Widget';
import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';


const HomePage = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const userData = useSelector((state) => state.user);
    
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
};

export default HomePage;
