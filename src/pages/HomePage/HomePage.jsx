import { useState } from 'react';
import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Feed from '../../components/homePage_components/Feed';
import Widget from '../../components/homePage_components/Widget';
import { useLocation } from 'react-router-dom';

function HomePage() {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log('user data from home page:', userData);

    return (
        <>
            <div className="home-page">
                {/**Side bar */}
                <Sidebar />
                {/**News feed   */}

                <Feed userData={userData}/>

                {/**Widgets */}

                <Widget />
            </div>
        </>
    );
}


export default HomePage;
