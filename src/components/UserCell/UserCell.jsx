import './UserCell.css';
import { useState } from 'react';
import { Avatar } from '@mui/material';

const UserCell = ({ name, username, avatar, bio, followsMe, followedByMe }) => {
    const [isFollowingButtonHovered, setIsFollowingButtonHovered] =
        useState(false);

    const handleFollowingButtonHover = () => {
        setIsFollowingButtonHovered(!isFollowingButtonHovered);
    };

    const goToUserProfile = () => {
        // TODO
        console.log(`redirecting to @${username}...`);
    };
    const onMouseEnterAvatarField = () => {
        // TODO
        console.log(`showing @${username} profile snippet at their avatar...`);
    };
    const onMouseLeaveAvatarField = () => {
        // TODO
        console.log(
            `stop showing @${username} profile snippet at their avatar`
        );
    };
    const onMouseEnterNameField = () => {
        // TODO
        console.log(`showing @${username} profile snippet at their name...`);
    };
    const onMouseLeaveNameField = () => {
        // TODO
        console.log(`stop showing @${username} profile snippet at their name`);
    };
    const onButtonClick = (event) => {
        // TODO
        event.stopPropagation();
        console.log(`@${username} cell button is clicked..`);
        if (followedByMe) {
            console.log(`unfollow @${username}..`);
        } else {
            console.log(`follow @${username}..`);
        }
    };

    return (
        <div className="user-cell-container" onClick={goToUserProfile}>
            <div
                className="user-cell-avatar-container"
                onMouseEnter={onMouseEnterAvatarField}
                onMouseLeave={onMouseLeaveAvatarField}
            >
                <Avatar className="user-cell-avatar" src={avatar} alt={name} />
            </div>
            <div className="user-cell-info-container">
                <div className="user-cell-upper-half">
                    <div className="user-cell-upper-left">
                        <span
                            className="user-cell-upper-left-top"
                            onMouseEnter={onMouseEnterNameField}
                            onMouseLeave={onMouseLeaveNameField}
                        >
                            {name}
                        </span>
                        <div className="user-cell-upper-left-down">
                            <span className="user-cell-username">{`@${username}`}</span>
                            {followsMe && (
                                <span className="user-cell-follows-me">
                                    Follows you
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="user-cell-upper-right">
                        {(followedByMe || followsMe) && (
                            <button
                                className={
                                    followedByMe == false
                                        ? 'black-small-button'
                                        : 'white-small-button'
                                }
                                onClick={onButtonClick}
                                onMouseEnter={handleFollowingButtonHover}
                                onMouseLeave={handleFollowingButtonHover}
                            >
                                {followedByMe == false
                                    ? 'Follow'
                                    : isFollowingButtonHovered
                                    ? 'Unfollow'
                                    : 'Following'}
                            </button>
                        )}
                    </div>
                </div>
                <div className="user-cell-lower-half">
                    <span>{bio}</span>
                </div>
            </div>
        </div>
    );
};

export default UserCell;
