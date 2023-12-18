import './LikersPage.css';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import { CircularProgress } from '@mui/material';
import LikersHeader from '../../components/LikersHeader/LikersHeader';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import getLikers from '../../apis/getLikers';
const LikersPage = () => {
    const location = useLocation();
    const name = location.state?.name;

    const tweetId = location.state?.tweetid;
    const token = location.state?.token;

    const [users, setUsers] = useState([]);
    const [curPage, setCurPage] = useState(0);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();

    useEffect(() => {
        if (curPage === 1) {
            navigate('/retweets', {
                state: { tweetid: tweetId, token: token },
            });
        }
    }, [curPage, navigate]);
    useEffect(() => {
        if (token) {
            console.log('token from likers page', token);
            console.log('tweet id from likers page', tweetId);
            setIsPageLoading(false);
        } else {
            console.log('Loading likers page...');
        }
    }, [token]);
    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getLikers({
                tweetId: tweetId,
                token: token,
            });
            console.log('likers', fetchedUsers);
            setUsers(fetchedUsers);
        };

        if (!isPageLoading) {
            fetchUsers();
        }
    }, [tweetId, token, isPageLoading]);

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
