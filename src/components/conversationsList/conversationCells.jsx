import './conversationCells.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ConversationCell from './conversationCell';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const ConversationCells = ({ conversations }) => {
    const token = useSelector((state) => state.user.token);
    const myID = useSelector((state) => state.user.user).id;

    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        if (conversations && token && myID) {
            setIsPageLoading(false);
        }
    }, [conversations, token, myID]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    if (conversations.length === 0) {
        return <></>;
    }

    return (
        <div className="conversations-cells-container">
            {conversations.map((conversation) => (
                <ConversationCell
                    key={conversation.id}
                    id={conversation.user.id}
                    name={conversation.user.name}
                    username={conversation.user.username}
                    avatar={conversation.user.avatar}
                    bio={
                        conversation.user.bio === 'null'
                            ? ''
                            : conversation.user.bio
                    }
                    token={token}
                    myID={myID}
                />
            ))}
        </div>
    );
};

export default ConversationCells;
