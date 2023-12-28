import './Message.css';
export default function Message({text,user}) {
    return (
        <div className={`message`}>
            <div className={`message-flex ${user==0? "user-message" : user==1 ? "friend-message":"" }`}>
            <div className="flex-space"></div>
            <div className="message-wrapper">
                <div className='text-padding'>
                    <span className='text-span'>{text}</span>
                </div>
                </div>
            </div>
            <div className="message-padding"></div>
        </div>
    );
}
