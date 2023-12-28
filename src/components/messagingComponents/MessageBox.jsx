import './MessageBox.css';
import { useState, useRef, useEffect } from 'react';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import TextareaAutosize from 'react-textarea-autosize';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import addMessage from '../../apis/addMessage';
export default function MessageBox({ Conversation_id, token, handleMessageSent }) {
    const [text, setText] = useState('');
    const [textAreaClass, setTextareaClass] = useState('scroll-disable');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const maxScrollHeight = 160;
    const handlePaste = () => {
        console.log('Pasted');
    };

    const handleResize = (e) => {
        // updateRows(e.target);
        const textarea = e.target;
        const scrollHeight = textarea.scrollHeight;
        console.log(scrollHeight);
        if (scrollHeight < maxScrollHeight) {
            setTextareaClass('scroll-disable');
            e.target.style.height = `${e.target.scrollHeight}px`;
            console.log('scroll disable');
        } else {
            console.log('scroll enable1');
            setTextareaClass('scroll-enable');
            textarea.style.height = `${maxScrollHeight}px`;
            console.log('scroll enable2');
        }
    };

    const textBoxRef = useRef(null);
    // Set initial height when the component mounts
    useEffect(() => {
        const textarea = document.querySelector(
            '.text-field-wrapper > .text-container > textarea '
        );
        textarea.style.height = '24px';
        // textarea.classList.remove('scroll-enable');
        // textarea.classList.add('scroll-disable');
        // console.log('this is the text length' + text.length);
    }, []); //

    const handleSendClick = () => {
        if (text.length <= 0) {
            return;
        }
        addMessage(Conversation_id, text, token);
        handleMessageSent();
        setText('');
    };
    return (
        <div className="message-box-wrapper">
            <div className="message-box">
                <div className="media-container">
                    <div className="attach-icon">
                        <BrokenImageOutlinedIcon />
                    </div>
                </div>
                <div className="text-field-wrapper">
                    <div className="text-container">
                        <TextareaAutosize
                            placeholder="Start a new message"
                            value={text}
                            onChange={handleChange}
                            onInput={handleResize}
                            onPaste={handlePaste}
                            ref={textBoxRef}
                            className={textAreaClass}
                        />
                    </div>
                </div>
                <div
                    className={
                        text.length == 0
                            ? 'hide-send-container'
                            : 'send-container'
                    }
                    onClick={handleSendClick}
                >
                    <SendOutlinedIcon />
                </div>
            </div>
        </div>
    );
}
