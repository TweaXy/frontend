import './BlockedUserCell.css';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotifyBox from '../NotifyBox/NotifyBox';
import unblock from '../../apis/unblock';
import block from '../../apis/block';

const BlockedUserCell = ({ id, name, username, avatar, bio, token }) => {
    const [isBlocked, setIsBlocked] = useState(true);
    const [blockActionOccurred, setBlockActionOccurred] = useState(false);

    const navigate = useNavigate();

    const goToUserProfile = () => {
        navigate(`/profile/${username}`, { state: { userID: id } });
    };

    const onButtonClickHandler = async (event) => {
        event.stopPropagation();
        if (isBlocked) {
            if (await unblock(username, token)) {
                setIsBlocked(false);
                setBlockActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setBlockActionOccurred(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            }
        } else {
            if (await block(username, token)) {
                setIsBlocked(true);
                setBlockActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setBlockActionOccurred(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            }
        }
    };

    return (
        <div className="blocked-user-cell-container" onClick={goToUserProfile}>
            <div className="blocked-user-cell-avatar-container">
                <Avatar
                    className="blocked-user-cell-avatar"
                    src={avatar}
                    alt={name}
                />
            </div>
            <div className="blocked-user-cell-info-container">
                <div className="blocked-user-cell-upper-half">
                    <div className="blocked-user-cell-upper-left">
                        <span className="blocked-user-cell-upper-left-top">
                            {name}
                        </span>
                        <div className="blocked-user-cell-upper-left-down">
                            <span>{`@${username}`}</span>
                        </div>
                    </div>
                    <div className="blocked-user-cell-upper-right">
                        <button
                            className={
                                isBlocked === true ? 'red-btn' : 'white-btn'
                            }
                            onClick={onButtonClickHandler}
                        >
                            {isBlocked === true ? 'Blocked' : 'Block'}
                        </button>
                    </div>
                </div>
                <div className="blocked-user-cell-lower-half">
                    <span>{bio}</span>
                </div>
                {blockActionOccurred && (
                    <NotifyBox
                        text={`@${username} has been ${
                            isBlocked ? 'blocked.' : 'unblocked.'
                        }`}
                    />
                )}
            </div>
        </div>
    );
};

export default BlockedUserCell;
