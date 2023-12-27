import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import './BlockUserWindow.css';
import ProfilePageSelectors from '../../shared/selectors/ProfilePage';

const BlockUserWindow = ({
    openWindow,
    closeWindow,
    handleUserBlock,
    username,
    isUserBlocked,
}) => {
    const blockUserHandler = () => {
        handleUserBlock();
        closeWindow();
    };

    const cancelBlockHandler = () => {
        closeWindow();
    };

    return (
        <div className="block-user-window">
            <Dialog
                open={openWindow}
                onClose={closeWindow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="block-dialog"
            >
                <div className="block-dialog-content">
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{
                            fontWeight: 'bolder',
                            marginBottom: 1.3,
                            lineHeight: 1,
                        }}
                        className="block-dialog-title"
                    >
                        {`${isUserBlocked ? 'Unblock' : 'Block'} @${username}?`}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            id="alert-dialog-description"
                            sx={{ fontSize: 15, lineHeight: 1.3 }}
                        >
                            {isUserBlocked
                                ? `They will be able to follow you and view your posts.`
                                : `They will not be able to follow you or view your posts, and you will not see posts or notifications from @${username}.`}
                        </DialogContentText>
                    </DialogContent>
                    <div className="block-options-container">
                        {isUserBlocked ? (
                            <Button
                                variant="outlined"
                                className="unblock-btn"
                                onClick={blockUserHandler}
                            >
                                Unblock
                            </Button>
                        ) : (
                            <Button
                                data-test={ProfilePageSelectors.BLOCK_USER_CONFIRM_BUTTON}
                                variant="outlined"
                                className="block-btn"
                                onClick={blockUserHandler}
                            >
                                Block
                            </Button>
                        )}
                        <Button
                            variant="outlined"
                            className="cancel-btn"
                            onClick={cancelBlockHandler}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default BlockUserWindow;
