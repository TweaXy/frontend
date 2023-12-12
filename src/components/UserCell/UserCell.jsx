import './UserCell.css';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import unfollow from '../../apis/unfollow';
import follow from '../../apis/follow';
import { useNavigate } from 'react-router-dom';
import UsersCellsSelectors from '../../shared/selectors/UsersCells';

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

    const [isFollowingButtonHovered, setIsFollowingButtonHovered] =
        useState(false);

    const [followedByMeState, setFollowedByMeState] = useState(followedByMe);

    const handleFollowingButtonHover = () => {
        setIsFollowingButtonHovered(!isFollowingButtonHovered);
    };

    const goToUserProfile = () => {
        console.log(`redirecting to @${username}...`);
        navigate(`/profile/${username}`, { state: { userID: id } });
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

    const onButtonClick = async (event) => {
        event.stopPropagation();
        console.log(`@${username} cell button is clicked..`);
        if (followedByMeState) {
            console.log(`unfollow @${username}..`);
            if (await unfollow(username, token)) {
                setFollowedByMeState(false);
            }
        } else {
            console.log(`follow @${username}..`);
            if (await follow(username, token)) {
                setFollowedByMeState(true);
            }
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
                            data-test={UsersCellsSelectors.NAME}
                            className="user-cell-upper-left-top"
                            onMouseEnter={onMouseEnterNameField}
                            onMouseLeave={onMouseLeaveNameField}
                        >
                            {name}
                        </span>
                        <div className="user-cell-upper-left-down">
                            <span className="user-cell-username" data-test={UsersCellsSelectors.USERNAME}>{`@${username}`}</span>
                            {followsMe && (
                                <span className="user-cell-follows-me">
                                    Follows you
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="user-cell-upper-right">
                        {myID !== id && (
                            <button
                                data-test={UsersCellsSelectors.FOLLOW_UNFOLLOW_BUTTON}
                                className={
                                    followedByMeState === false
                                        ? 'black-small-button'
                                        : 'white-small-button'
                                }
                                onClick={onButtonClick}
                                onMouseEnter={handleFollowingButtonHover}
                                onMouseLeave={handleFollowingButtonHover}
                            >
                                {followedByMeState === false
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
