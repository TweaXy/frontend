import './FollowingFollowersPage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Widget from '../../components/homePage_components/Widget';
import UsersCells from '../../components/UsersCells/UsersCells';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const followers = [
    {
        userAvatar: '../assets/avatars/male-avatar-1.svg',
        name: 'Hamdy Salem',
        username: 'Hamdy_Salem',
        doesFollowMe: true,
        userState: 'Following',
        userBio: 'What is the point?',
    },
    {
        userAvatar: '../assets/avatars/male-avatar-2.svg',
        name: 'Manga',
        username: 'Mostafa_Magdy',
        doesFollowMe: true,
        userState: 'Following',
        userBio: '',
    },
    {
        userAvatar: '../assets/avatars/female-avatar-1.svg',
        name: 'Dua Lipa',
        username: 'itsDuaLipa',
        doesFollowMe: true,
        userState: 'Follow',
        userBio:
            'You are the only one who can decide what kind of life you want to live.',
    },
    {
        userAvatar: '../assets/avatars/female-avatar-2.svg',
        name: 'Emma Watson',
        username: 'Emma_Watson',
        doesFollowMe: true,
        userState: 'Follow',
        userBio: 'Actress and activist.',
    },
    {
        userAvatar: '../assets/avatars/male-avatar-3.svg',
        name: 'John Doe',
        username: 'John_Doe',
        doesFollowMe: true,
        userState: 'Follow',
        userBio: 'Lorem ipsum dolor sit amet.',
    },
    {
        userAvatar: '../assets/avatars/female-avatar-3.svg',
        name: 'Alicia Keys',
        username: 'Alicia_Keys',
        doesFollowMe: true,
        userState: 'Follow',
        userBio: 'Singer-songwriter and pianist.',
    },
    {
        userAvatar: '../assets/avatars/male-avatar-1.svg',
        name: 'Chris Evans',
        username: 'Chris_Evans',
        doesFollowMe: true,
        userState: 'Following',
        userBio: 'Actor and filmmaker.',
    },
    {
        userAvatar: '../assets/avatars/female-avatar-1.svg',
        name: 'Taylor Swift',
        username: 'Taylor_Swift',
        doesFollowMe: true,
        userState: 'Follow',
        userBio: 'Singer-songwriter and actress.',
    },
    {
        userAvatar: '../assets/avatars/male-avatar-2.svg',
        name: 'Leonardo DiCaprio',
        username: 'Leo_DiCaprio',
        doesFollowMe: true,
        userState: 'Follow',
        userBio: 'Actor and environmental activist.',
    },
];

const following = [];

const FollowingFollowersPage = ({ activePage }) => {
    const [curPage, setCurPage] = useState(activePage);
    const navigate = useNavigate();

    const goBackToProfile = () => {
        navigate('profile');
    };

    const onClickHandler = () => {
        // TODO handle user cell click (route to user profile)
    };

    const onNameClickHandler = () => {
        // TODO handle clicking on name
    };

    const onNameHovering = () => {
        // TODO handle hovering on name
    };

    const stopNameHovering = () => {
        // TODO
    };

    const onAvatarClickHandler = () => {
        // TODO handle clicking on avatar
    };

    const onAvatarHovering = () => {
        // TODO handle hovering on avatar
    };

    const stopAvatarHovering = () => {
        // TODO
    };

    const onButtonClickHandler = () => {
        // TODO handle button click
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
                        onClickHandler={onClickHandler}
                        onNameClickHandler={onNameClickHandler}
                        onNameHovering={onNameHovering}
                        stopNameHovering={stopNameHovering}
                        onAvatarClickHandler={onAvatarClickHandler}
                        onAvatarHovering={onAvatarHovering}
                        stopAvatarHovering={stopAvatarHovering}
                        onButtonClickHandler={onButtonClickHandler}
                    />
                )}
                {curPage == 0 && (
                    <UsersCells
                        users={following}
                        curPage={curPage}
                        username={'itsHamdySalem'}
                        onClickHandler={onClickHandler}
                        onNameClickHandler={onNameClickHandler}
                        onNameHovering={onNameHovering}
                        stopNameHovering={stopNameHovering}
                        onAvatarClickHandler={onAvatarClickHandler}
                        onAvatarHovering={onAvatarHovering}
                        stopAvatarHovering={stopAvatarHovering}
                        onButtonClickHandler={onButtonClickHandler}
                    />
                )}
            </div>
            <Widget />
        </div>
    );
};

export default FollowingFollowersPage;
