import React from 'react';
import ConversationWindowHeader from './conversationHeader';
import './conversation.css';
import Button from '@mui/material/Button';
import SettingsConversationHeader from './settingsConversationHeader';
import { useSelector } from 'react-redux';
import UserCell from '../UserCell/UserCell';
import { useState } from 'react';
const ListConversation = () => {
    const token = useSelector((state) => state.user.token);
    const myID = useSelector((state) => state.user.user).id;
    const user = useSelector((state) => state.user.user);
    const [isSettingOpened, setIsSettingOpened] = useState(1);

    return (
        <>
            <div className="conversation-body">
                <ConversationWindowHeader />

                <div className="empty-messages-style">
                    <span className="header-inbox-span">
                        Welcome to your inbox!
                    </span>

                    <p className="empty-text-conversation">
                        Drop a line, share posts and more with private
                        conversations between you and others on Tweaxy.
                    </p>

                    <Button variant="outlined" className="write-message-button">
                        Write a message
                    </Button>
                </div>
            </div>
            {isSettingOpened == 0 && (
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
                        </span>
                    </span>

                    <div>
                        <div className="text-settings-conversation-page">
                            block @{user.username}
                        </div>
                        <div className="text-settings-conversation-page">
                            mute @{user.username}
                        </div>
                        <div className="text-settings-conversation-page">
                            Leave Conversation
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ListConversation;
