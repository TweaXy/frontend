import './Followers.css';
import UserCell from '../../components/UserCell/UserCell';

const Followers = () => {
    return (
        <div
            style={{
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                background: '#000',
            }}
        >
            <UserCell
                userAvatar={'../assets/male-avatar-1.svg'}
                name={'Hamdy Salem'}
                username={'Hamdy_Salem'}
                doesFollowMe={true}
                userState={'Following'}
                userBio={'What is the point?'}
            />
            <UserCell
                userAvatar={'../assets/male-avatar-2.svg'}
                name={'Manga'}
                username={'Mostafa_Magdy'}
                doesFollowMe={true}
                userState={'Follow'}
                userBio={''}
            />
        </div>
    );
};

export default Followers;
