import './FollowingFollowersPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';

const followers = [
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
        name: 'Dua Lipa',
        username: 'itsDuaLipa',
        avatar: '../assets/avatars/female-avatar-1.svg',
        bio: 'You are the only one who can decide what kind of life you want to live.',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 4,
        name: 'Emma Watson',
        username: 'Emma_Watson',
        avatar: '../assets/avatars/female-avatar-2.svg',
        bio: 'Actress and activist.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 5,
        name: 'John Doe',
        username: 'John_Doe',
        avatar: '../assets/avatars/male-avatar-3.svg',
        bio: 'Lorem ipsum dolor sit amet.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 6,
        name: 'Alicia Keys',
        username: 'Alicia_Keys',
        avatar: '../assets/avatars/female-avatar-3.svg',
        bio: 'Singer-songwriter and pianist.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 7,
        name: 'Chris Evans',
        username: 'Chris_Evans',
        avatar: '../assets/avatars/male-avatar-1.svg',
        bio: 'Actor and filmmaker.',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 8,
        name: 'Taylor Swift',
        username: 'Taylor_Swift',
        avatar: '../assets/avatars/female-avatar-1.svg',
        bio: 'Singer-songwriter and actress.',
        followsMe: true,
        followedByMe: false,
    },
    {
        id: 9,
        name: 'Leonardo DiCaprio',
        username: 'Leo_DiCaprio',
        avatar: '../assets/avatars/male-avatar-2.svg',
        bio: 'Actor and environmental activist.',
        followsMe: true,
        followedByMe: false,
    },
];

const following = [
    {
        id: 1,
        name: 'Hamdy Salem',
        username: 'Hamdy_Salem',
        avatar: '../assets/avatars/male-avatar-1.svg',
        bio: 'What is the point?',
        followsMe: false,
        followedByMe: true,
    },
    {
        id: 2,
        name: 'Manga',
        username: 'Mostafa_Magdy',
        avatar: '../assets/avatars/male-avatar-2.svg',
        bio: '',
        followsMe: true,
        followedByMe: true,
    },
    {
        id: 3,
        name: 'abotaha',
        username: 'abotaha_forgot_password',
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
];

const FollowingFollowersPage = ({ activePage }) => {
    const [curPage, setCurPage] = useState(activePage);
    const navigate = useNavigate();

    const goBackToProfile = () => {
        navigate('profile');
    };

    return (
        <div className="followers-page-container">
            <Sidebar />
            <div className="following-followers-widget">
                <FollowingFollowersHeader
                    name={'Hamdy Salem'}
                    username={'itsHamdySalem'}
                    activePage={curPage}
                    setActivePage={setCurPage}
                    goBackToProfile={goBackToProfile}
                />
                {curPage == 0 && (
                    <UsersCells
                        users={followers}
                        curPage={curPage}
                        username={'itsHamdySalem'}
                    />
                )}
                {curPage == 1 && (
                    <UsersCells
                        users={following}
                        curPage={curPage}
                        username={'itsHamdySalem'}
                    />
                )}
            </div>
            <Widget />
        </div>
    );
};

export default FollowingFollowersPage;
