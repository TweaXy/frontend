import './ProfileBio.css';
import { useState } from 'react';
import EditProfilePage from '../../pages/userProfile/EditProfilePage';
export default function EditProfile({name,authToken,cover,avatar}) {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const openWindow = () => {
        setIsWindowOpen(true);
    };
    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    return (
        <>
            <div className="editProfile" onClick={openWindow}>
                <span>Edit profile</span>
            </div>
            {isWindowOpen && <EditProfilePage name={name} cover={cover} avatar={avatar} authToken={authToken} onClose={closeWindow} />}
        </>
    );
}
