import { useState } from 'react';
import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Feed from '../../components/homePage_components/Feed';
import Widget from '../../components/homePage_components/Widget';
import { useLocation } from 'react-router-dom';
import SignUpHome from '../SignUpPage/SignUpPageHome';

function HomePage() {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log('user data from home page:', userData);

    const [isWindowOpen, setIsWindowOpen] = useState(location.state?.firstTime);
    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    return (
        <>
            <div className="home-page">
                {/**Side bar */}
                <Sidebar userData={userData} active={0}/>
                {/**News feed   */}

                <Feed userData={userData} isTherePopUpWindow={isWindowOpen} />

                {/**Widgets */}

                <Widget />
            </div>
            {isWindowOpen && (
                <SignUpHome
                    onClose={closeWindow}
                    UN={username}
                    authToken={userData.token}
                />
            )}
        </>
    );
}

export default HomePage;
