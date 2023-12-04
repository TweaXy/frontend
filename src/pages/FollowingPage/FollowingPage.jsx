import './FollowingPage.css';
import getUserFollowing from '../../apis/getUserFollowing';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const FollowingPage = () => {
    const location = useLocation();
    const name = location.state?.name;
    const username = location.state?.username;

    const [users, setUsers] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            console.log('token from following page', token);
            setIsPageLoading(false);
        } else {
            console.log('Loading following page...');
        }
    }, [token]);

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
                state: { name: name, username: username },
            });
        }
    }, [curPage, navigate, name, username]);

    const backToUserProfile = () => {
        console.log('navigating back to user profile');
        // TODO navigate back to user profile
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
            <Sidebar />
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
                            <span className="header-span">{`@${username} has no followers`}</span>
                            <span className="body-span">
                                Once the account has followers, they'll show up
                                here.
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
