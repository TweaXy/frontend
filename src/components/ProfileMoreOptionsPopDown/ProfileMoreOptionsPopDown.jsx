import './ProfileMoreOptionsPopDown.css';
import { Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import BlockIcon from '@mui/icons-material/Block';
import NotifyBox from '../NotifyBox/NotifyBox';
import isUserMuted from '../../apis/isMuted';
import unmute from '../../apis/unmute';
import mute from '../../apis/mute';
import BlockUserWindow from '../BlockUserWindow/BlockUserWindow';

const ProfileMoreOptionsPopDown = ({
    handleClose,
    anchorEl,
    username,
    userID,
    token,
    MutedByMe,
    BlockedByMe,
}) => {
    const [isMuted, setIsMuted] = useState(MutedByMe);
    const [muteActionOccurred, setMuteActionOccurred] = useState(false);

    const [isBlocked, setIsBlocked] = useState(BlockedByMe);
    const [blockActionOccurred, setBlockActionOccurred] = useState(false);

    const [isBlockWindow, setIsBlockWindow] = useState(false);

    const onBlockOptionClick = () => {
        setIsBlockWindow(true);
        handleClose();
    };

    const closeBlockWindow = () => {
        setIsBlockWindow(false);
    };

    const handleUserMute = async () => {
        if (isMuted) {
            if (await unmute(username, token)) {
                setIsMuted(false);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                handleClose();
                return () => clearTimeout(timeoutID);
            }
        } else {
            if (await mute(username, token)) {
                setIsMuted(true);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                handleClose();
                return () => clearTimeout(timeoutID);
            }
        }
    };

    const handleUserBlock = async () => {
        if (isBlocked) {
            // if (await unblock(username, token)) {
            setIsBlocked(false);
            setBlockActionOccurred(true);
            const timeoutID = setTimeout(() => {
                setBlockActionOccurred(false);
            }, 3000);
            handleClose();
            return () => clearTimeout(timeoutID);
            // }
        } else {
            // if (await block(username, token)) {
            setIsBlocked(true);
            setBlockActionOccurred(true);
            const timeoutID = setTimeout(() => {
                setBlockActionOccurred(false);
            }, 3000);
            handleClose();
            return () => clearTimeout(timeoutID);
            // }
        }
    };

    useEffect(() => {
        const handleIfUserMuted = async () => {
            setIsMuted(await isUserMuted(userID, token));
        };

        handleIfUserMuted();
    }, [anchorEl, userID, token]);

    return (
        <div className="more-menu">
            <Menu
                id="more-options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="more-options-menu"
            >
                <MenuItem onClick={handleUserMute}>
                    {isMuted ? <VolumeMuteIcon /> : <VolumeOffIcon />}
                    {`${isMuted ? 'Unmute' : 'Mute'} @${username}`}
                </MenuItem>
                <MenuItem onClick={onBlockOptionClick}>
                    {isBlocked ? <HighlightOffIcon /> : <BlockIcon />}
                    {`${isBlocked ? 'Unblock' : 'Block'} @${username}`}
                </MenuItem>
            </Menu>
            <BlockUserWindow
                openWindow={isBlockWindow}
                closeWindow={closeBlockWindow}
                blockUser={handleUserBlock}
                username={username}
                isUserBlocked={isBlocked}
            />
            {muteActionOccurred && (
                <NotifyBox
                    text={`@${username} has been ${
                        isMuted ? 'muted' : 'unmuted'
                    }`}
                />
            )}
            {blockActionOccurred && (
                <NotifyBox
                    text={`@${username} has been ${
                        isBlocked ? 'blocked' : 'unblock'
                    }`}
                />
            )}
        </div>
    );
};

export default ProfileMoreOptionsPopDown;
