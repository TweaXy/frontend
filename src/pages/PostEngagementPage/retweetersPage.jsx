import './LikersPage.css';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';
import { CircularProgress } from '@mui/material';
import LikersHeader from '../../components/LikersHeader/LikersHeader';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const   RetweetersPage = () => {
    const location = useLocation();
    const tweetId = location.state?.tweetid;
    const token = location.state?.token;
    const username = location.state?.username;
    
    const [users, setUsers] = useState([]);
    const [curPage, setCurPage] = useState(0);
    const [isPageLoading, setIsPageLoading] = useState(true);

    
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    {
        /*} 
   
    useEffect(() => {
        if (token) {
            console.log('token from likers page', token);
            setIsPageLoading(false);
        } else {
            console.log('Loading likers page...');
        }
    }, [token]);
   {/*} useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUserFollowers({
                    username,
                    token,
                });
                setUsers(fetchedUsers);
            } catch (error) {
                console.log('Error fetching user followers: ', error.message);
            }
        };
   
        if (!isPageLoading) {
            fetchUsers();
        }
    }, [username, token, isPageLoading]);
   
  
    if (isPageLoading) {
        return (
            <div className="loading-page">
                <CircularProgress />
            </div>
        );
    }  */
    }
    const arrowBackRoute = () => navigate(-1);
    return (
        <div className="following-page-container">
            <Sidebar userData={{ user: user, token: token }} />
            <div className="following-widget">
                <LikersHeader
                    curPage={curPage}
                    setCurPage={setCurPage}
                    navigateBack={arrowBackRoute}
                />
                <UsersCells users={users} />
                {users.length === 0 && (
                    <div className="empty-users-cells-container">
                        <div className="span-container">
                            <span className="header-span">No retweets yet</span>
                            <span className="body-span">
                                When someone retweet this post,
                                it'll show up here.
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <Widget />
        </div>
    );
};

export default RetweetersPage;
