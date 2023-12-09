import './LikersPage.css';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';
import { CircularProgress } from '@mui/material';
import LikersHeader from '../../components/likersHeader/LikersHeader';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const LikersPage = () => {
    const location = useLocation();
    const name = location.state?.name;
    const userID = location.state?.userID;
    const username = location.state?.username;

    const [users, setUsers] = useState([]);
    const [curPage, setCurPage] = useState(0);
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);
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
            <Sidebar />
            <div className="following-widget">
                <LikersHeader
                    name={name}
                    username={username}
                    curPage={curPage}
                    setCurPage={setCurPage}
                    navigateBack={arrowBackRoute}
                />
                <UsersCells users={users} />
                {users.length === 0 && (
                    <div className="empty-users-cells-container">
                        <div className="span-container">
                            <span className="header-span">No Likes yet</span>
                            <span className="body-span">
                                When someone taps the heart to Like this post,
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

export default LikersPage;
