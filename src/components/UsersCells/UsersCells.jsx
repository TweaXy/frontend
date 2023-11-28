import './UsersCells.css';
import UserCell from '../UserCell/UserCell';

const UsersCells = ({ users, curPage, username }) => {
    if (users.length === 0) {
        console.log(users);
        if (curPage == 0) {
            console.log(`@${username} has no followers..`);
        } else if (curPage == 1) {
            console.log(`@${username} isn't following anyone..`);
        }
        return (
            <div className="empty-users-cells-container">
                {curPage == 0 && (
                    <div className="span-container">
                        <span className="header-span">{`@${username} has no followers`}</span>
                        <span className="body-span">
                            Once the account has followers, they'll show up
                            here.
                        </span>
                    </div>
                )}
                {curPage == 1 && (
                    <div className="span-container">
                        <span className="header-span">{`@${username} isn't following anyone`}</span>
                        <span className="body-span">
                            Once they follow accounts, they'll show up here.
                        </span>
                    </div>
                )}
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
        </div>
    );
};

export default UsersCells;
