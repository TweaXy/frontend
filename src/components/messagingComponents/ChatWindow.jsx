import MessageBox from './MessageBox';
import Chat from './Chat';
import ChatHeader from './ChatHeader';
import './ChatWindow.css';
export default function ChatWindow({}) {
    return (
        <div className="chat-window">
            <ChatHeader username={"Abo Taha"}/>
                <Chat/>
                <MessageBox />
        </div>
    );
}
