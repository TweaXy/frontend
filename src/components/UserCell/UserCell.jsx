import './UserCell.css';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import unfollow from '../../apis/unfollow';
import follow from '../../apis/follow';
import { useNavigate } from 'react-router-dom';
import UsersCellsSelectors from '../../shared/selectors/UsersCells';
import unblock from '../../apis/unblock';
import NotifyBox from '../NotifyBox/NotifyBox';

const UserCell = ({
    id,
    name,
    username,
    avatar,
    bio,
    followsMe,
    followedByMe,
    blocksMe,
    blockedByMe,
    token,
    myID,
}) => {
    const navigate = useNavigate();

    console.log('user cell: ', username, followedByMe, followsMe);

    const [isFollowingButtonHovered, setIsFollowingButtonHovered] =
        useState(false);

    const [followedByMeState, setFollowedByMeState] = useState(followedByMe);

    const [isBlockedByMe, setIsBlockedByMe] = useState(blockedByMe);

    const [notificationMessage, setNotificationMessage] = useState('');

    const handleFollowingButtonHover = () => {
        setIsFollowingButtonHovered(!isFollowingButtonHovered);
    };

    const goToUserProfile = () => {
        console.log(`redirecting to @${username}...`);
        navigate(`/profile/${username}`, { state: { userID: id } });
    };

    const onButtonClick = async (event) => {
        event.stopPropagation();
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

    const handleBlockButtonClick = async (event) => {
        event.stopPropagation();
        if (await unblock(username, token)) {
            setIsBlockedByMe(false);
            setNotificationMessage(
                `@${username} has been unblocked successfully`
            );
            const timeoutId = setTimeout(
                () => setNotificationMessage(''),
                3000
            );
            return () => clearTimeout(timeoutId);
        } else {
            setNotificationMessage(
                `something went wrong. please try again later.`
            );
            const timeoutId = setTimeout(
                () => setNotificationMessage(''),
                3000
            );
            return () => clearTimeout(timeoutId);
        }
    };

    return (
        <div className="user-cell-container" onClick={goToUserProfile}>
            <div className="user-cell-avatar-container">
                <Avatar
                    className="user-cell-avatar"
                    src={`https://tweaxybackend.mywire.org/api/v1/images/${avatar}`}
                    alt={name}
                />
            </div>
            <div className="user-cell-info-container">
                <div className="user-cell-upper-half">
                    <div className="user-cell-upper-left">
                        <span
                            data-test={UsersCellsSelectors.NAME}
                            className="user-cell-upper-left-top"
                        >
                            {name}
                        </span>
                        <div className="user-cell-upper-left-down">
                            <span
                                className="user-cell-username"
                                data-test={UsersCellsSelectors.USERNAME}
                            >{`@${username}`}</span>
                            {blocksMe ? (
                                <span className="user-cell-blocks-me">
                                    Blocks you
                                </span>
                            ) : followsMe ? (
                                <span className="user-cell-follows-me">
                                    Follows you
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="user-cell-upper-right">
                        {myID === id || blocksMe ? (
                            <></>
                        ) : isBlockedByMe ? (
                            <button
                                className="red-button"
                                onClick={handleBlockButtonClick}
                            >
                                Block
                            </button>
                        ) : (
                            <button
                                data-test={
                                    UsersCellsSelectors.FOLLOW_UNFOLLOW_BUTTON
                                }
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
            {notificationMessage.length !== 0 && (
                <NotifyBox text={notificationMessage} />
            )}
        </div>
    );
};

export default UserCell;
