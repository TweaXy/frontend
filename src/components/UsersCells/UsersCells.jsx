import './UsersCells.css';
import UserCell from '../UserCell/UserCell';

const UsersCells = ({
    users,
    curPage,
    username,
    onClickHandler,
    onNameClickHandler,
    onNameHovering,
    stopNameHovering,
    onAvatarClickHandler,
    onAvatarHovering,
    stopAvatarHovering,
    onButtonClickHandler,
}) => {
    if (users.length === 0) {
        return (
            <div className="users-cells-container">
                {/* TODO no followers or following */}
            </div>
        );
    }
    return (
        <div className="users-cells-container">
            {users.map((user) => (
                <UserCell
                    key={user.username}
                    userAvatar={user.userAvatar}
                    name={user.name}
                    username={user.username}
                    doesFollowMe={user.doesFollowMe}
                    userState={user.userState}
                    userBio={user.userBio}
                    onClickHandler={onClickHandler}
                    onNameClickHandler={onNameClickHandler}
                    onNameHovering={onNameHovering}
                    stopNameHovering={stopNameHovering}
                    onAvatarClickHandler={onAvatarClickHandler}
                    onAvatarHovering={onAvatarHovering}
                    stopAvatarHovering={stopAvatarHovering}
                    onButtonClickHandler={onButtonClickHandler}
                />
            ))}
        </div>
    );
};

export default UsersCells;
