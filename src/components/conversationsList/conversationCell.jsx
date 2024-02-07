import './conversationCell.css';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import createConversation from '../../apis/createConversation';
import { useNavigate } from 'react-router-dom';

const ConversationCell = ({ id, name, username, avatar, bio, token, myID }) => {
    const navigate = useNavigate();

    const goToConversation = async () => {
        const conversationInfo = await createConversation(username, token);
        navigate(`/conversations/`, {
            state: { conversationInfo: conversationInfo },
        });
    };

    const onMouseEnterAvatarField = () => {
        // TODO
        console.log(`showing @${username} profile snippet at their avatar...`);
    };
    const onMouseLeaveAvatarField = () => {
        // TODO
        console.log(
            `stop showing @${username} profile snippet at their avatar`
        );
    };

    const onMouseEnterNameField = () => {
        // TODO
        console.log(`showing @${username} profile snippet at their name...`);
    };
    const onMouseLeaveNameField = () => {
        // TODO
        console.log(`stop showing @${username} profile snippet at their name`);
    };

    return (
        <div className="conversation-cell-container" onClick={goToConversation}>
            <div
                className="conversation-cell-avatar-container"
                onMouseEnter={onMouseEnterAvatarField}
                onMouseLeave={onMouseLeaveAvatarField}
            >
                <Avatar
                    className="conversation-cell-avatar"
                    src={`http://tweaxybackend.mywire.org/api/v1/images/${avatar}`}
                    alt={name}
                />
            </div>
            <div className="conversation-cell-info-container">
                <div className="conversation-cell-upper-half">
                    <div className="conversation-cell-upper-left">
                        <span
                            className="conversation-cell-upper-left-top"
                            onMouseEnter={onMouseEnterNameField}
                            onMouseLeave={onMouseLeaveNameField}
                        >
                            {name}
                        </span>
                        <span className="conversation-cell-upper-left-down">
                            <span className="conversation-cell-username">{` @${username}`}</span>
                        </span>
                    </div>
                </div>
                <div className="conversation-cell-lower-half">
                    <span>{bio}</span>
                </div>
            </div>
        </div>
    );
};

export default ConversationCell;
