import './MessagePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import ListConversation from '../../components/conversationsList/conversation';
import ChatWindow from '../../components/messagingComponents/ChatWindow';

const MessagePage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);
    const [isPageLoading, setIsPageLoading] = useState(true);
    
   /* useEffect(() => {
        if (token && userID && user) {
            setUserData({user, token});
            setIsPageLoading(false);
            console.log('user id from profile page', userID);
            console.log('user token from profile page', token);
        } else {
            console.log('profile page is loading');
        }
    }, [token, userID, user]);*/

  /* if (isPageLoading) {
        return (
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </div>
        );
    }*/

    return (
        <>
            <div className="message-page">
                
                <Sidebar userData={{user,token}} active={4} />
                
                <ListConversation />
                <ChatWindow/>

              
            </div>
        </>
    );
};

export default MessagePage;
