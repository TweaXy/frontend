import React, { useState } from 'react';
import './Avater.css';
const AvatarInput = () => {
    const [avatar, setAvatar] = useState(null);
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

    return (
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
                    </div>
                </div>
            ) : (
                <div className="avatar-upload">
                    <label htmlFor="avatarInput" className="avatar-label">
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
    );
};
export default AvatarInput;
