import './FollowingFollowersPage.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';
import { token } from 'stylis';

const FollowingFollowersPage = () => {
    const location = useLocation();
    const activePage = location.state?.activePage;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwb2puejV6MDAxNmV5a3RqY29qbGkzNlwiIiwiaWF0IjoxNzAxNTUxMjI0LCJleHAiOjE3MDQxNDMyMjR9.f0FOmr3hwUV3UgB6S72E_T7tbIHVTXdLeFR8LuuO7cs";
    // TODO:: modify it later
    // const token = location.state?.token;
    // console.log(activePage, token);
    
    const [curPage, setCurPage] = useState(activePage == 'followers' ? 0 : 1);
    const navigate = useNavigate();

    const goBackToProfile = () => {
        navigate('profile');
    };

    return (
        <div className="followers-page-container">
            <Sidebar />
            <div className="following-followers-widget">
                <FollowingFollowersHeader
                    name="Hamdy"
                    username="hamdysalem503_71627765"
                    activePage={curPage}
                    setActivePage={setCurPage}
                    goBackToProfile={goBackToProfile}
                />
                {curPage == 0 && (
                    <UsersCells
                        curPage={curPage}
                        username="hamdysalem503_71627765"
                        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwams0dDdxMDAwNDJ2aGgzY244cjB6NVwiIiwiaWF0IjoxNzAxMzAyOTMwLCJleHAiOjE3MDM4OTQ5MzB9.mQYsIGIrhDX_aJsFNRzjFKBi18MiQVtVGgaP-tAmkto"
                    />
                )}
                {curPage == 1 && (
                    <UsersCells
                        curPage={curPage}
                        username="hamdysalem503_71627765"
                        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwams0dDdxMDAwNDJ2aGgzY244cjB6NVwiIiwiaWF0IjoxNzAxMzAyOTMwLCJleHAiOjE3MDM4OTQ5MzB9.mQYsIGIrhDX_aJsFNRzjFKBi18MiQVtVGgaP-tAmkto"
                    />
                )}
            </div>
            <Widget token={token}/>
        </div>
    );
};

export default FollowingFollowersPage;
