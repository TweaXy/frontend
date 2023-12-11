import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import './DeleteTweetWindow.css'
export default function DeleteTweetWindow({ open, closeHandler,deleteTweet }) {
    const deleteTweetHandler =(e) =>{
        // handle the api deletion
        // apiDeleteTweet()
        deleteTweet();
        closeHandler();
    }
    const cancelDeleteTweetHandler =(e) =>{
        closeHandler();
    }
    return (
        <div className="delete-tweet-window">
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
            >   
                <div className="dialog-container">
                <DialogTitle id="alert-dialog-title"  sx={
                    {
                        fontWeight:"bolder",
                        marginBottom:1.3,
                        lineHeight:1
                    }
                }>
                    {'Delete Post?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={
                        {
                            fontSize:15,
                            lineHeight:1.3
                        }
                    }>
                        This can’t be undone and it will be removed from your
                        profile, the timeline of any accounts that follow you,
                        and from search results.
                    </DialogContentText>
                </DialogContent>
                
                   {/* buttons */}
                   <div className="delete-option-container">
                   <Button variant="outlined" className="delete-btn" onClick={deleteTweetHandler} >
                Delete
            </Button>
                   <Button variant="outlined" className="cancel-btn" onClick={cancelDeleteTweetHandler}>
                Cancel
            </Button>
            </div>
            </div>
            </Dialog>
        </div>
    );
}
