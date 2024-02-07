import './MutedUserCell.css';
import mute from '../../apis/mute';
import unmute from '../../apis/unmute';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import { VolumeMuteOutlined, VolumeOffOutlined } from '@mui/icons-material';
import NotifyBox from '../NotifyBox/NotifyBox';

const MutedUserCell = ({ id, name, username, avatar, bio, token }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [muteActionOccurred, setMuteActionOccurred] = useState(false);

    const navigate = useNavigate();

    const goToUserProfile = () => {
        console.log(`going to ${username} profile with id ${id}`);
        navigate(`/profile/${username}`, { state: { userID: id } });
    };

    const onButtonClickHandler = async (event) => {
        event.stopPropagation();
        if (isMuted) {
            if (await unmute(username, token)) {
                setIsMuted(false);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            }
        } else {
            if (await mute(username, token)) {
                setIsMuted(true);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                return () => clearTimeout(timeoutID);
            }
        }
    };

    return (
        <div className="muted-user-cell-container" onClick={goToUserProfile}>
            <div className="muted-user-cell-avatar-container">
                <Avatar
                    className="muted-user-cell-avatar"
                    src={`http://tweaxybackend.mywire.org/api/v1/images/${avatar}`}
                    alt={name}
                />
            </div>
            <div className="muted-user-cell-info-container">
                <div className="muted-user-cell-upper-half">
                    <div className="muted-user-cell-upper-left">
                        <span className="muted-user-cell-upper-left-top">
                            {name}
                        </span>
                        <div className="muted-user-cell-upper-left-down">
                            <span>{`@${username}`}</span>
                        </div>
                    </div>
                    <div className="muted-user-cell-upper-right">
                        <IconButton
                            onClick={onButtonClickHandler}
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                            style={{
                                border: '1px solid var(--twitter-background)',
                            }}
                        >
                            {isMuted ? (
                                <VolumeOffOutlined color="error" />
                            ) : (
                                <VolumeMuteOutlined color="primary" />
                            )}
                        </IconButton>
                    </div>
                </div>
                <div className="muted-user-cell-lower-half">
                    <span>{bio}</span>
                </div>
                {muteActionOccurred && (
                    <NotifyBox
                        text={`@${username} has been ${
                            isMuted ? 'muted' : 'unmuted'
                        }`}
                    />
                )}
            </div>
        </div>
    );
};

export default MutedUserCell;
