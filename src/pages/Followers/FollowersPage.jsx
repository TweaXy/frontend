import './FollowersPage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Widget from '../../components/homePage_components/Widget';
import UsersCells from '../../components/UsersCells/UsersCells';

const FollowersPage = () => {
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
            doesFollowMe: false,
            userState: 'Follow',
            userBio: 'Lorem ipsum dolor sit amet.',
        },
        {
            userAvatar: '../assets/avatars/female-avatar-3.svg',
            name: 'Alicia Keys',
            username: 'Alicia_Keys',
            doesFollowMe: false,
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
            doesFollowMe: false,
            userState: 'Follow',
            userBio: 'Actor and environmental activist.',
        },
    ];
    return (
        <div className="followers-page-container">
            <Sidebar />
            <UsersCells followers={followers} />
            <Widget />
        </div>
    );
};

export default FollowersPage;
