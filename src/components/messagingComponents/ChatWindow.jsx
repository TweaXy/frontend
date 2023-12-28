import './ChatWindow.css';
import Chat from './Chat';
import MessageBox from './MessageBox';
import ChatHeader from './ChatHeader';
import { useEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import socket from '../../socket';
import getConversationMessages from '../../apis/getConverstationMeassages';

export default function ChatWindow({ conversationInfo, token, userId }) {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const [messages, setMessages] = useState([]);
    const [messageSent, setMessageSent] = useState(null);

    useEffect(() => {
        const connectSocket = async () => {
            socket.auth = { token: token };
            await socket.connect();
        };

        if (!socket.connected) {
            connectSocket();
        }

        socket.on('connect', () => {
            console.log('Connected to socket server: ', socket.id);
        });

        socket.on('connect_error', (error) => {
            console.log('authincation | connenction error');
            console.log(error.message);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        socket.on('error', (error) => {
            console.log('Error when sending message | anything: ', error);
        });

        socket.on('joined', (joined) => {
            console.log(
                'user successfully joined (other users can now communicate with him)',
                joined
            );
        });

        socket.on('messageSuccess', (message) => {
            console.log(`message sent successfully`, message);
        });

        socket.on('message', (receivedMsg) => {
            console.log('Received message:', receivedMsg);
            setMessages((prevMessages) => [...prevMessages, receivedMsg]);
        });

        return () => {
            socket.off('connect');
            socket.off('message');
            socket.off('messageSuccess');
            socket.off('joined');
            socket.off('error');
            socket.off('disconnect');
            socket.off('connect_error');
            socket.off('connect');
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        const getPreviousMessages = async () => {
            const previousMessages = await getConversationMessages(
                conversationInfo.conversation.id,
                token,
                10,
                10
            );
            setMessages(previousMessages);
        };

        if (conversationInfo !== undefined && token) {
            getPreviousMessages();
            setIsPageLoading(false);
        }

        if (setMessageSent) {
            getPreviousMessages();
            setMessageSent(false);
        }
    }, [conversationInfo, token, setMessageSent]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    if (conversationInfo === null) {
        return (
            <div className="empty-conversations-container">
                <div className="span-container">
                    <span className="header-span">Start a conversation</span>
                    <span className="body-span">
                        Once you select a conversation, chat will appear here.
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="chat-window">
            <ChatHeader username={conversationInfo.conversation.user.name} />
            <Chat messages={messages} userId={userId} />
            <MessageBox
                Conversation_id={conversationInfo.conversation.id}
                handleMessageSent={() => setMessageSent(true)}
                token={token}
            />
        </div>
    );
}
