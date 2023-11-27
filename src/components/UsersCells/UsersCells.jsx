import './UsersCells.css';
import UserCell from '../UserCell/UserCell';

const UsersCells = ({ followers }) => {
    return (
        <div className="users-cells-container">
            {followers.map((follower) => (
                <UserCell
                    key={follower.username}
                    userAvatar={follower.userAvatar}
                    name={follower.name}
                    username={follower.username}
                    doesFollowMe={follower.doesFollowMe}
                    userState={follower.userState}
                    userBio={follower.userBio}
                />
            ))}
        </div>
    );
};

export default UsersCells;
