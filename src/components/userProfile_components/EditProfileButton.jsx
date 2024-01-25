import './ProfileBio.css';
import { useState } from 'react';
import EditProfilePage from '../../pages/userProfile/EditProfilePage';
import ProfilePageSelectors from '../../shared/selectors/ProfilePage';
export default function EditProfile({name,authToken,cover,avatar,bio,location,website}) {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const openWindow = () => {
        setIsWindowOpen(true);
    };
    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    console.log("edit Profile Button",avatar);
    return (
        <>
            <div data-test={ProfilePageSelectors.EDIT_PROFILE_BUTTON} className="editProfile" onClick={openWindow}>
                <span>Edit profile</span>
            </div>
            {isWindowOpen && <EditProfilePage name={name} bio={bio} location={location} website={website} cover={cover} avatar={avatar} authToken={authToken} onClose={closeWindow} />}
        </>
    );
}
