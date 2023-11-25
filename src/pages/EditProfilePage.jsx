import LoginWindowHeader from '../components/LoginWindowHeader/LoginWindowHeader';
import { MenuItem, TextField } from '@mui/material';
import './SignUpPage/SignUpPage.css';
export default function EditProfilePage({ onClose }) {
    return (
        <>
            {' '}
            <div className="sign-up-page-container">
                <LoginWindowHeader onClose={onClose} />

                <div className="sign-up-page-body">
                    <div className="sign-up-uuid-field">
                        <TextField
                            className="sign-up-uuid-field"
                            variant="outlined"
                            id="outlined-basic"
                            label="Name"
                            name="name"
                        />
                    </div>
                    <div className="sign-up-uuid-field">
                        <TextField
                            className="sign-up-uuid-field"
                            variant="outlined"
                            id="outlined-basic"
                            label="Bio"
                            name="bio"
                        />
                    </div>

                    <div className="sign-up-uuid-field">
                        <TextField
                            className="sign-up-uuid-field"
                            variant="outlined"
                            id="outlined-basic"
                            label="Location"
                        />
                    </div>
                    <div className="sign-up-uuid-field">
                        <TextField
                            className="sign-up-uuid-field"
                            variant="outlined"
                            name="website"
                            label="website"
                        />
                    </div>

                    <button className="black-wide-button">Next</button>
                </div>
            </div>
        </>
    );
}
