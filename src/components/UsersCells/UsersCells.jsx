import './UsersCells.css';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import getUserFollowers from '../../apis/getUserFollowers';
import getUserFollowing from '../../apis/getUserFollowing';
import UserCell from '../UserCell/UserCell';

const fakeUsers = [
    {
        id: 1,
        name: 'Hamdy Salem',
        username: 'Hamdy_Salem',
        avatar: '../assets/avatars/male-avatar-1.svg',
        bio: 'What is the point?',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 2,
        name: 'Manga',
        username: 'Mostafa_Magdy',
        avatar: '../assets/avatars/male-avatar-2.svg',
        bio: '',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 3,
        name: 'abotaha',
        username: 'abotaha23',
        avatar: '../assets/avatars/male-avatar-3.svg',
        bio: "It's better to light up a candle than curse the darkness.",
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 4,
        name: 'Kory',
        username: 'kory_demo',
        avatar: '../assets/avatars/male-avatar-3.svg',
        bio: '',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 5,
        name: 'Ibram Atef',
        username: 'ibram_welcome_page',
        avatar: '../assets/avatars/male-avatar-2.svg',
        bio: '7ad 3aml el apis',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 6,
        name: 'Dua Lipa',
        username: 'itsDuaLipa',
        avatar: '../assets/avatars/female-avatar-1.svg',
        bio: 'You are the only one who can decide what kind of life you want to live.',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 7,
        name: 'Emma Watson',
        username: 'Emma_Watson',
        avatar: '../assets/avatars/female-avatar-2.svg',
        bio: 'Actress and activist.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 8,
        name: 'John Doe',
        username: 'John_Doe',
        avatar: '../assets/avatars/male-avatar-3.svg',
        bio: 'Lorem ipsum dolor sit amet.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 9,
        name: 'Alicia Keys',
        username: 'Alicia_Keys',
        avatar: '../assets/avatars/female-avatar-3.svg',
        bio: 'Singer-songwriter and pianist.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 10,
        name: 'Chris Evans',
        username: 'Chris_Evans',
        avatar: '../assets/avatars/male-avatar-1.svg',
        bio: 'Actor and filmmaker.',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 11,
        name: 'Taylor Swift',
        username: 'Taylor_Swift',
        avatar: '../assets/avatars/female-avatar-1.svg',
        bio: 'Singer-songwriter and actress.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 12,
        name: 'Leonardo DiCaprio',
        username: 'Leo_DiCaprio',
        avatar: '../assets/avatars/male-avatar-2.svg',
        bio: 'Actor and environmental activist.',
        followsMe: true,
        followedByMe: false,
    },
];

const UsersCells = ({ curPage, username, token }) => {
    const [users, setUsers] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);

    // console.log('username: ', username);
    // console.log('token: ', token);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // simulating loading to test it
                await new Promise((resolve) => setTimeout(resolve, 3000));

                const fetchedUsers =
                    curPage === 0
                        ? await getUserFollowers({ username, token })
                        : await getUserFollowing({ username, token });

                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setIsPageLoading(false);
            }
        };

        setIsPageLoading(true);
        fetchUsers();
    }, [curPage]);

    useEffect(() => {
        // temporarily fake users to test UI till we've a real users
        if (users.length === 0 && Math.random() > 0.5) {
            setUsers(fakeUsers);
            setIsPageLoading(false);
        }
    }, [users]);

    if (isPageLoading) {
        return (
            <div className="circular-progress-spinner">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="users-cells-container">
            {users.map((user) => (
                <UserCell
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    avatar={user.avatar}
                    bio={user.bio}
                    followsMe={user.followsMe}
                    followedByMe={user.followedByMe}
                />
            ))}
            {users.length === 0 && (
                <div className="empty-users-cells-container">
                    {curPage === 0 && (
                        <div className="span-container">
                            <span className="header-span">{`@${username} has no followers`}</span>
                            <span className="body-span">
                                Once the account has followers, they'll show up
                                here.
                            </span>
                        </div>
                    )}
                    {curPage === 1 && (
                        <div className="span-container">
                            <span className="header-span">{`@${username} isn't following anyone`}</span>
                            <span className="body-span">
                                Once they follow accounts, they'll show up here.
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UsersCells;
