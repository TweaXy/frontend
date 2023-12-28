import './Chat.css';
import Message from './Message';
export default function Chat({ messages, userId }) {
    return (
        <div className="chat-wrapper">
            {messages.map((message) => {
                console.log('message:', message);
                return (
                    <Message
                        key={message.id}
                        text={message.text}
                        user={message.senderId == userId ? 0 : 1}
                    />
                );
            })}
        </div>
    );
}
