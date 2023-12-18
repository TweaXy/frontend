import React from "react";
import ConversationWindowHeader from "./conversationHeader";
import "./conversation.css"
import Button from '@mui/material/Button';
const ListConversation = () => {
 
  return (
    <div className="conversation-body">
    
    <ConversationWindowHeader />


    <div className="empty-messages-style">
      <span className="header-inbox-span">Welcome to your inbox!</span>

      <p className="empty-text-conversation">
        Drop a line, share posts and more with private conversations between you
        and others on Tweaxy.
      </p>

      <Button variant="outlined" className="write-message-button">
                Write a message
        </Button>

      </div>
    </div>
   
  );
};

export default ListConversation;