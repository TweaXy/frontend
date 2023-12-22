import './HomePage.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Feed } from '../../components/homePage_components/Feed';
import InitNotifications from '../../apis/NotificationsApis/InitNotifications';
import Sidebar from '../../components/homePage_components/Sidebar';
import Widget from '../../components/homePage_components/Widget';
import SignUpHome from '../SignUpPage/SignUpPageHome';

const HomePage = ({ isTherePopUpWindow }) => {
    // const dispatch = useDispatch();
    // dispatch(clearUser());

    const Location = useLocation();
    const Ft = Location.state?.firstTime;

    const [isWindowOpen, setIsWindowOpen] = useState(Ft || isTherePopUpWindow);

    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [userData, setUserData] = useState({});

    const [isPageLoading, setIsPageLoading] = useState(true);

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    useEffect(() => {
        if (user && token) {
            setUserData({ user: user, token: token });
            InitNotifications(token);
            setIsPageLoading(false);
        } else {
            console.log('Loading home page..');
        }
    }, [user, token]);

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
                <Sidebar
                    userData={userData}
                    active={0}
                    setIsTherePopUpWindow={setIsWindowOpen}
                />
                <Feed userData={userData} isTherePopUpWindow={isWindowOpen} />
                <Widget token={token} />
            </div>
            {isWindowOpen && (
                <SignUpHome
                    onClose={closeWindow}
                    UN={user.username}
                    token={token}
                    user={user}
                />
            )}
        </>
    );
};

export default HomePage;
