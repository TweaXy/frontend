import './ChatWindow.css';
import Chat from './Chat';
import MessageBox from './MessageBox';
import ChatHeader from './ChatHeader';

export default function ChatWindow({ conversationInfo,token }) {
    console.log('from Chatwindowa', conversationInfo);
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

    console.log('conversation info', conversationInfo);
    return (
        <div className="chat-window">
            <ChatHeader username={conversationInfo.conversation.user.name} />
            <Chat />
            <MessageBox id={conversationInfo.id} token={token} />
        </div>
    );
}
