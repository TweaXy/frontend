import { useState } from 'react';
import './SignUpHome.css';
import { TextField } from '@mui/material';
import Setavatar from './Avater';
import Pictureupload from '../../apis/Pictureupload';
import './Avater.css';
import img from '../../../assets/default.jpeg';
const UN = 'Pick a profile picture';
const uniq = 'Have a favorite selfie? Upload it now.';
const SignUpPageAvater = ({ next_Handler }) => {
    const [avatar, setAvatar] = useState(img);
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setAvatar(reader.result);
                onAvatarChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveAvatar = () => {
        setAvatar(null);
    };
    const updatepicture = () => {
        Pictureupload(avatar);
    };
    return (
        <>
            <div className="sign-up-homepage-body">
                <h1>{UN}</h1>
                <p>{uniq}</p>
                <div className="avatar-input">
                    {avatar ? (
                        <div className="avatar-preview">
                            <img
                                src={avatar}
                                alt="User Avatar"
                                className="avatar-img"
                            />
                            <div className="avatar-actions">
                                <button onClick={handleRemoveAvatar}></button>
                                <button onClick={handleRemoveAvatar}></button>
                            </div>
                        </div>
                    ) : (
                        <div className="avatar-upload">
                            <label
                                htmlFor="avatarInput"
                                className="avatar-label"
                            >
                                Choose your profile picture
                            </label>
                            <input
                                type="file"
                                id="avatarInput"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="avatar-input-field"
                            />
                        </div>
                    )}
                </div>
                <button
                    className="Hp-black-wide-button"
                    type="submit"
                    onClick={updatepicture}
                >
                    Next
                </button>
            </div>
        </>
    );
};
export default SignUpPageAvater;
