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
                userAvatar={'../assets/female-avatar.svg'}
                name={'Kosbara Hanem'}
                username={'Roaa_Hosam'}
                doesFollowMe={true}
                userState={'Follow'}
                userBio={'Killua ❤️'}
            />
            <UserCell
                userAvatar={'../assets/male-avatar-1.svg'}
                name={'Angry Beeh'}
                username={'Hamdy_Salem'}
                doesFollowMe={true}
                userState={'Following'}
                userBio={'Kosbara Hanem norm awyyyy'}
            />
            <UserCell
                userAvatar={'../assets/male-avatar-2.svg'}
                name={'Al Manga'}
                username={'Mostafa_Magdy'}
                doesFollowMe={false}
                userState={'Follow'}
                userBio={''}
            />
        </div>
    );
};

export default Followers;
