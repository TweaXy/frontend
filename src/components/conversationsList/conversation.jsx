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

    const [conversations, setConversations] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        if (token) {
            setIsPageLoading(false);
        }
    }, [token]);

    useEffect(() => {
        const fetchConversations = async () => {
            const fetchedConversations = await getConversationsApi({
                token: token,
            });
            setConversations(fetchedConversations);
        };

        if (!isPageLoading) {
            fetchConversations();
        }
    }, [isPageLoading, token]);

    return (
        <>
            <div className="conversation-body">
                <ConversationWindowHeader />

                <ConversationCells conversations={conversations} />
                {conversations.length == 0 && (
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
        </>
    );
};

export default ListConversation;
