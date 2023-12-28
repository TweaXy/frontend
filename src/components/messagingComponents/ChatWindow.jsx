import MessageBox from './MessageBox';
import Chat from './Chat';
import './ChatWindow.css';
export default function ChatWindow({}) {
    return (
        <div className="chat-window">
                <Chat/>
                <MessageBox />
        </div>
    );
}
