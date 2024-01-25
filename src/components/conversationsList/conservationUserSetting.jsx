import './conversation.css';
import UserCell from '../UserCell/UserCell';
import SettingsConversationHeader from './settingsConversationHeader';
import { useSelector } from 'react-redux';
import isUserMuted from '../../apis/isMuted';
import unblock from '../../apis/unblock';
import unmute from '../../apis/unmute';
import block from '../../apis/block';
import mute from '../../apis/mute';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
const ConservationSetting = () => {
    const token = useSelector((state) => state.user.token);
    const myID = useSelector((state) => state.user.user).id;
    const user = useSelector((state) => state.user.user);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const leaveConversationHandler = () => {
        console.log(' leave conversation');
    };
    const [isMuted, setIsMuted] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const muteUserHandler = async () => {
        if (isMuted) {
            if (await unmute(user.username, token)) {
                setIsMuted(false);
                setMuteActionOccurred(true);
                const timeoutID = setTimeout(() => {
                    setMuteActionOccurred(false);
                }, 3000);
                handleClose();
                return () => clearTimeout(timeoutID);
            }
        } else {
            if (await mute(user.username, token)) {
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

    const blockUserHandler = async () => {
        if (isBlocked) {
            if (await unblock(user.username, token)) {
                setIsBlocked(false);
                window.location.reload();
            }
        } else {
            if (await block(user.username, token)) {
                setIsBlocked(true);
                window.location.reload();
            }
        }
    };
    return (
        <div className="settings-converation-style">
            <SettingsConversationHeader />
            <UserCell
                key={myID}
                id={myID}
                name={user.name}
                username={user.username}
                avatar={user.avatar}
                bio={user.bio === 'null' ? '' : user.bio}
                followsMe={user.followsMe}
                followedByMe={user.followedByMe}
                token={token}
                myID={myID}
            />
            <span className="span-notification-text-settings-conversation">
                <span className="text-settings-conversation-page">
                    Notifications
                </span>
                <span className="snooze-text-settings-conversation">
                    Snooze notifications from @{user.username}
                    <Switch {...label} className="snooze-switch" />
                </span>
            </span>

            <div>
                <div
                    className="interaction-text-settings-conversation"
                    onClick={blockUserHandler}
                >
                    block @{user.username}
                </div>
                <div
                    className="interaction-text-settings-conversation"
                    onClick={muteUserHandler}
                >
                    mute @{user.username}
                </div>
                <div
                    className="interaction-leave-text-settings-conversation"
                    onClick={leaveConversationHandler}
                >
                    Leave Conversation
                </div>
            </div>
        </div>
    );
};
export default ConservationSetting;
