import './LikersPage.css';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import { CircularProgress } from '@mui/material';
import LikersHeader from '../../components/LikersHeader/LikersHeader';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import getRetweeters from '../../apis/getRetweeters';
const RetweetersPage = () => {
    const location = useLocation();
    const tweetId = location.state?.tweetid;
    const token = location.state?.token;

    const [users, setUsers] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [isPageLoading, setIsPageLoading] = useState(true);

    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (curPage === 0) {
            navigate('/likers', {
                state: { tweetid: tweetId, token: token },
            });
        }
    }, [curPage, navigate]);
    
        
   
    useEffect(() => {
        if (token) {
            console.log('token from retweeters page', token);
            console.log('tweet id from retweeters page', tweetId);
            setIsPageLoading(false);
        } else {
            console.log('Loading retweeters page...');
        }
    }, [token]);
    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getRetweeters({
                tweetId: tweetId,
                token: token,
            });
            console.log('retweeters', fetchedUsers);
            setUsers(fetchedUsers);
        };
   
        if (!isPageLoading) {
            fetchUsers();
        }
    }, [ tweetId,token, isPageLoading]);
   
  
    if (isPageLoading) {
        return (
            <div className="loading-page">
                <CircularProgress />
            </div>
        );
    }  
    const arrowBackRoute = () => navigate(-1);
    return (
        <div className="analytics-page-container">
            <Sidebar userData={{ user: user, token: token }} />
            <div className="analytics-widget">
                <LikersHeader
                    curPage={curPage}
                    setCurPage={setCurPage}
                    navigateBack={arrowBackRoute}
                />
                <div className="empty-users-cells-container">
                    <UsersCells users={users} />
                    {users.length === 0 && (
                        <div className="span-container">
                            <span className="header-span">No retweets yet</span>
                            <span className="body-span">
                                When someone retweet this post, it'll show up
                                here.
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <Widget />
        </div>
    );
};

export default RetweetersPage;
