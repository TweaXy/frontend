import React from 'react';
import ConversationWindowHeader from './conversationHeader';
import './conversation.css';
import Button from '@mui/material/Button';
import SettingsConversationHeader from './settingsConversationHeader';
import { useSelector } from 'react-redux';
import UserCell from '../UserCell/UserCell';
import { useState, useEffect } from 'react';
import getConversationsApi from '../../apis/getConversations';
import ConversationCells from './conversationCells.jsx';

const ListConversation = () => {
    const token = useSelector((state) => state.user.token);
    const myID = useSelector((state) => state.user.user).id;
    const user = useSelector((state) => state.user.user);
    const [isSettingOpened, setIsSettingOpened] = useState(1);
    const [users, setUsers] = useState([]);
    const leaveConversationHandler = () => {
        console.log(' leave conversation');
    };
    const muteUserHandler = () => {
        console.log(' mute user');
    };

    const blockUserHandler = () => {
        console.log(' block user');
    };
    const [isPageLoading, setIsPageLoading] = useState(true);
    useEffect(() => {
        if (token) {
            console.log('token from conversation api page', token);

            setIsPageLoading(false);
        } else {
            console.log('Loading conversation page...');
        }
    }, [token]);
    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getConversationsApi({
                token: token,
            });
            console.log('conversations', fetchedUsers);
            setUsers(fetchedUsers);
        };

        if (!isPageLoading) {
            fetchUsers();
        }
    }, [isPageLoading, token]);

    return (
        <>
            <div className="conversation-body">
                <ConversationWindowHeader />

                <ConversationCells users={users} />
                {users.length == 0 && (
                    <div className="empty-messages-style">
                        <span className="header-inbox-span">
                            Welcome to your inbox!
                        </span>

                        <p className="empty-text-conversation">
                            Drop a line, share posts and more with private
                            conversations between you and others on Tweaxy.
                        </p>

                        <Button
                            variant="outlined"
                            className="write-message-button"
                        >
                            Write a message
                        </Button>
                    </div>
                )}
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
            )}
        </>
    );
};

export default ListConversation;
