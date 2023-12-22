import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import MainTweetInteraction from './MainTweetInteraction';
import './AddReplyWindow.css'
import CloseWindowHeader from './CloseWindowHeader';
import ReplyBox from './ReplyBox';
export default function AddReplyWindow({ open, closeHandler,avatar,username,handle,uploadTime,tweetText,addReplyHandler }) {

    return (
        <div className="add-reply-window" >
            <Dialog
                open={open}
                onClose={closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={
                    {
                        // width:320
                        
                    }
                }
                className='add-reply-dialog'
            >   
                <div className="reply-window-container">
               <div className="close-reply-container">
                <CloseWindowHeader closeHandler={closeHandler} height={53}/>
               </div>
               <div className="main-tweet">
                <MainTweetInteraction avatar={avatar} username={username} handle={handle} uploadTime={uploadTime} tweetText={tweetText}/>
               </div>
               <div className="reply-to-container">
                <div className="reply-to-line">
                <div className="half-container"></div>
                </div>
                <div className="reply-to-text">Replying to <span className='mention-text'>{`@${handle}`}</span></div>
               </div>
               <ReplyBox closeHandler={closeHandler} addReplyHandler={addReplyHandler}/>
               </div>
            </Dialog>
        </div>
    );
}
