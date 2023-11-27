import { useEffect, useState } from 'react';
import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Feed from '../../components/homePage_components/Feed';
import Widget from '../../components/homePage_components/Widget';
import SignUpHome from '../SignUpPage/SignUpPageHome';
import { useParams } from 'react-router-dom';
function HomePage() {
    const [isWindowOpen, setIsWindowOpen] = useState(true);
    const { username } = useParams();
    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    return (
        <>
            <div className="home-page">
                {/**Side bar */}
                <Sidebar />
                {/**News feed */}

                <Feed />

                {/**Widgets */}

                <Widget />
            </div>
            {isWindowOpen && <SignUpHome onClose={closeWindow} UN={username} />}
        </>
    );
}

export default HomePage;
