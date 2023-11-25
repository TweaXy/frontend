import './ProfileBio.css';
import { useState } from 'react';
import EditProfilePage from '../../pages/EditProfilePage';
export default function EditProfile() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const openWindow = () => {
        setIsWindowOpen(true);
    };
    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    return (
        <div className="editProfile" onClick={openWindow}>
            <span>Edit profile</span>
            {isWindowOpen && <EditProfilePage onClose={closeWindow} />}
        </div>
    );
}
