import { Avatar } from '@mui/material';
import './UserCell.css';
import { useState } from 'react';

const UserCell = ({
    userAvatar,
    name,
    username,
    doesFollowMe,
    userState,
    userBio,
    onClickHandler,
    onNameClickHandler,
    onNameHovering,
    stopNameHovering,
    onAvatarClickHandler,
    onAvatarHovering,
    stopAvatarHovering,
    onButtonClickHandler,
}) => {
    const [isFollowingButtonHovered, setIsFollowingButtonHovered] =
        useState(false);

    const handleFollowingButtonHover = () => {
        setIsFollowingButtonHovered(!isFollowingButtonHovered);
    };

    return (
        <div className="user-cell-container" onClick={onClickHandler}>
            <div
                className="user-cell-avatar-container"
                onClick={onAvatarClickHandler}
                onMouseEnter={onAvatarHovering}
                onMouseLeave={stopAvatarHovering}
            >
                <Avatar
                    className="user-cell-avatar"
                    src={userAvatar}
                    alt={name}
                />
            </div>
            <div className="user-cell-info-container">
                <div className="user-cell-upper-half">
                    <div className="user-cell-upper-left">
                        <span
                            className="user-cell-upper-left-top"
                            onClick={onNameClickHandler}
                            onMouseEnter={onNameHovering}
                            onMouseLeave={stopNameHovering}
                        >
                            {name}
                        </span>
                        <div className="user-cell-upper-left-down">
                            <span className="user-cell-username">{`@${username}`}</span>
                            {doesFollowMe && (
                                <span className="user-cell-follows-me">
                                    Follows you
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="user-cell-upper-right">
                        <button
                            className={
                                userState == 'Follow'
                                    ? 'black-small-button'
                                    : 'white-small-button'
                            }
                            onClick={onButtonClickHandler}
                            onMouseEnter={handleFollowingButtonHover}
                            onMouseLeave={handleFollowingButtonHover}
                        >
                            {userState === 'Following' &&
                            isFollowingButtonHovered
                                ? 'Unfollow'
                                : userState}
                        </button>
                    </div>
                </div>
                <div className="user-cell-lower-half">
                    <span>{userBio}</span>
                </div>
            </div>
        </div>
    );
};

export default UserCell;
