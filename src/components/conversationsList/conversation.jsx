import React from 'react';
import ConversationWindowHeader from './conversationHeader';
import './conversation.css';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import getConversationsApi from '../../apis/getConversations';
import ConversationCells from './conversationCells.jsx';
import ConservationSetting from './conservationUserSetting.jsx';
const ListConversation = () => {
    const token = useSelector((state) => state.user.token);
    const [isSettingOpened, setIsSettingOpened] = useState(1);
    const [users, setUsers] = useState([]);
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
               < ConservationSetting />
            )}
        </>
    );
};

export default ListConversation;
