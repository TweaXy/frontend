import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Feed from '../../components/homePage_components/Feed';
import Widget from '../../components/homePage_components/Widget';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import SignUpHome from '../SignUpPage/SignUpPageHome';
const HomePage = () => {
    const Location = useLocation();
    const Ft = Location.state?.firstTime;
    const [isWindowOpen, setIsWindowOpen] = useState(Ft);
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);
    const userData = { user, token };
    const closeWindow = () => {
        setIsWindowOpen(false);
    };
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
                <Widget token={token} />
            </div>
            {isWindowOpen && (
                <SignUpHome
                    onClose={closeWindow}
                    UN={user.username}
                    authToken={token}
                />
            )}
        </>
    );
};

export default HomePage;