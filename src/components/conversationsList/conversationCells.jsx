import './conversationCells.css';

import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ConversationCell from './conversationCell';

const ConversationCells = ({ users }) => {
    const [isPageLoading, setIsPageLoading] = useState(users === undefined);
    const token = useSelector((state) => state.user.token);
    const myID = useSelector((state) => state.user.user).id;

    useEffect(() => {
        if (users !== undefined && token && myID) {
            setIsPageLoading(false);
            console.log(users);
        }
    }, [users, token, myID]);

    if (isPageLoading) {
        return (
            <div className="circular-progress-spinner">
                <CircularProgress />
            </div>
        );
    }

    if (users.length === 0) {
        return <></>;
    }

    return (
        <div className="conversations-cells-container">
            {users.map((user) => (
                <ConversationCell
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    avatar={user.avatar}
                    bio={user.bio === 'null' ? '' : user.bio}
                    token={token}
                    myID={myID}
                />
            ))}
        </div>
    );
};

export default ConversationCells;
