import './MessagePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ListConversation from '../../components/conversationsList/conversation';
import ChatWindow from '../../components/messagingComponents/ChatWindow';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { useLocation } from 'react-router';

const MessagePage = () => {
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const [isPageLoading, setIsPageLoading] = useState(true);

    const location = useLocation();
    const conversationInfo = location.state?.conversationInfo;

    useEffect(() => {
        if (token && user) {
            setIsPageLoading(false);
        }
    }, [token, user]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <>
            <div className="message-page">
                <Sidebar userData={{ user, token }} active={4} />

                <ListConversation />
                <ChatWindow conversationInfo={conversationInfo} />
            </div>
        </>
    );
};

export default MessagePage;
