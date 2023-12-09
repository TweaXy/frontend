import './FollowingPage.css';
import getUserFollowing from '../../apis/getUserFollowing';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/actions';

const FollowingPage = () => {
    const location = useLocation();
    const name = location.state?.name;
    const userID = location.state?.userID;
    const username = location.state?.username;

    const [users, setUsers] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (token && user) {
                setIsPageLoading(false);
            } else {
                dispatch(clearUser());
                navigate('/');
            }
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [token, user, dispatch, navigate]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUserFollowing({
                    username,
                    token,
                });
                setUsers(fetchedUsers);
            } catch (error) {
                console.log('Error fetching user following: ', error.message);
            }
        };

        if (!isPageLoading) {
            fetchUsers();
        }
    }, [username, token, isPageLoading]);

    useEffect(() => {
        if (curPage === 0) {
            navigate(`/${username}/followers`, {
                state: { name: name, username: username, userID: userID },
            });
        }
    }, [curPage, navigate, name, username, userID]);

    const backToUserProfile = () => {
        console.log('navigating back to user profile');
        navigate(`/profile/${username}`, { state: { userID: userID } });
    };

    if (isPageLoading) {
        return (
            <div className="loading-page">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="following-page-container">
            <Sidebar userData={{ user: user, token: token }} />
            <div className="following-widget">
                <FollowingFollowersHeader
                    name={name}
                    username={username}
                    curPage={curPage}
                    setCurPage={setCurPage}
                    navigateBack={backToUserProfile}
                />
                <UsersCells users={users} />
                {users.length === 0 && (
                    <div className="empty-users-cells-container">
                        <div className="span-container">
                            <span className="header-span">
                                {`@${username} isn't following anyone`}
                            </span>
                            <span className="body-span">
                                Once they follow accounts, they'll show up here.
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <Widget />
        </div>
    );
};

export default FollowingPage;
