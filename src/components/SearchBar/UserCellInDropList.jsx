import './UserCellInDropList.css';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import unfollow from '../../apis/unfollow';
import follow from '../../apis/follow';
import { useNavigate } from 'react-router-dom';

const UserCell = ({
    id,
    name,
    username,
    avatar,
    bio,
    followsMe,
    followedByMe,
    token,
    myID,
}) => {
    const navigate = useNavigate();

    const goToUserProfile = () => {
        console.log(`redirecting to @${username}...`);
        navigate(`/profile/${username}`, { state: { userID: id } });
    };

    const onMouseEnterAvatarField = (e) => {
        // e.stopPropagation();
        // TODO
        console.log(`showing @${username} profile snippet at their avatar...`);
    };
    const onMouseLeaveAvatarField = (e) => {
        // e.stopPropagation();
        // TODO
        console.log(
            `stop showing @${username} profile snippet at their avatar`
        );
    };

    const onMouseEnterNameField = (e) => {
        // e.stopPropagation();
        // TODO
        console.log(`showing @${username} profile snippet at their name...`);
    };
    const onMouseLeaveNameField = (e) => {
        // e.stopPropagation();
        // TODO
        console.log(`stop showing @${username} profile snippet at their name`);
    };

    return (
        <div
            className="user-cell-in-drop-list-container"
            onClick={goToUserProfile}
        >
            <div
                className="user-cell-in-drop-list-avatar-container"
                onMouseEnter={onMouseEnterAvatarField}
                onMouseLeave={onMouseLeaveAvatarField}
            >
                <Avatar
                    className="user-cell-in-drop-list-avatar"
                    src={`http://tweaxybackend.mywire.org/api/v1/images/${avatar}`}
                    alt={name}
                />
            </div>
            <div className="user-cell-in-drop-list-info-container">
                <div className="user-cell-in-drop-list-upper-half">
                    <div className="user-cell-in-drop-list-upper-left">
                        <span
                            className="user-cell-in-drop-list-upper-left-top"
                            onMouseEnter={onMouseEnterNameField}
                            onMouseLeave={onMouseLeaveNameField}
                        >
                            {name}
                        </span>
                        <div className="user-cell-in-drop-list-upper-left-down">
                            <span className="user-cell-in-drop-list-username">{`@${username}`}</span>
                            {followsMe && (
                                <span className="user-cell-in-drop-list-follows-me">
                                    Follows you
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="user-cell-in-drop-list-lower-half">
                    <span>{bio}</span>
                </div>
            </div>
        </div>
    );
};

export default UserCell;
