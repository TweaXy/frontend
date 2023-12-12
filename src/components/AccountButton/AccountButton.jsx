import './AccountButton.css';
import { useEffect, useState } from 'react';
import { MoreHoriz } from '@mui/icons-material';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import logout from '../../apis/logout';
import { clearUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePageSelectors from '../../shared/selectors/HomePage';

const AccountButton = ({ userAvatar, name, username, token, setIsTherePopUpWindow }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);
    const [isSignUpWindowOpen, setIsSignUpWindowOpen] = useState(false);

    const [isUserLoggedOut, setIsUserLoggedOut] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const closeLoginPage = () => {
        setIsLoginWindowOpen(false);
        setIsTherePopUpWindow(false)
    };

    const openSignUpWindow = () => {
        setIsSignUpWindowOpen(true);
        setIsLoginWindowOpen(false);
    };

    const closeSignUpWindow = () => {
        setIsSignUpWindowOpen(false);
        setIsTherePopUpWindow(false);
    };

    const handleLoginToExistingAccount = () => {
        setIsTherePopUpWindow(true);
        setIsLoginWindowOpen(true);
    };

    const handleLogout = async () => {
        const response = await logout(token);
        if (response) {
            setIsUserLoggedOut(true);
        }
    };

    useEffect(() => {
        if (isUserLoggedOut) {
            dispatch(clearUser());
            navigate('/');
        }
    }, [isUserLoggedOut, navigate, dispatch]);

    return (
        <>
            <div className="account-btn-container">
                <Button
                    data-test={HomePageSelectors.ACCOUNT_BUTTON}
                    className="user-account-btn"
                    aria-controls="user-account-menu"
                    aria-haspopup="true"
                    disableRipple
                    onClick={handleButtonClick}
                >
                    <div className="account-btn-left">
                        <Avatar src={userAvatar} />
                        <div className="account-btn-body-wrapper">
                            <span className="name-span">{name}</span>
                            <span className="username-span">{`@${username}`}</span>
                        </div>
                    </div>
                    <MoreHoriz className="more-horiz" />
                </Button>
                <Menu
                    id="user-account-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleLoginToExistingAccount}>
                        Add an existing account
                    </MenuItem>
                    <MenuItem
                        data-test={HomePageSelectors.LOGOUT_BUTTON}
                        onClick={handleLogout}
                    >{`Log out @${username}`}</MenuItem>
                </Menu>
            </div>
            {isLoginWindowOpen && (
                <LoginPage
                    onClose={closeLoginPage}
                    openSignUpWindow={openSignUpWindow}
                />
            )}
            {isSignUpWindowOpen && <SignUpPage onClose={closeSignUpWindow} />}
        </>
    );
};

export default AccountButton;
