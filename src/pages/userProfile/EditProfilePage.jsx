import EditProfileWindowHeader from '../../components/userProfile_components/EditProfileWindowHeader';
import { Avatar } from '@mui/material';
import { MenuItem, TextField } from '@mui/material';
import '../userProfile/EditProfilePage.css';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
export default function EditProfilePage({ onClose }) {
    return (
        <>
            {' '}
            <div className="edit-profile-page-container">
                <EditProfileWindowHeader onClose={onClose} />
                {/*} <div className="background-image">
                    <img  alt="" />
                </div>
                <div className="profile-title">
                    <div className="profile-image">
                        <Avatar
                            sx={{ width: 134, height: 134 }}
                            src="https://www.istockphoto.com/photos/avatar-images-for-profile"
                        />
                    </div>
   
                    
                </div> */}

                <div className="edit-profile-page-body">
                <div className="background-image">
                    <img  alt="" />
                </div>
                <div>
                    <div className="profile-image">
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            src="https://www.istockphoto.com/photos/avatar-images-for-profile"
                        />
                        {/*<CameraEnhanceOutlinedIcon
                        className='camera-enhance'
            />*/}
                    </div>
   
                    
                </div>
                    <div className="edit-profile-uuid-field">
                        <TextField
                            className="edit-profile-uuid-field"
                            variant="outlined"
                            id="outlined-basic"
                            label="Name"
                            name="name"
                        />
                    </div>
                    <div className="edit-profile-uuid-field">
                        <TextField
                            className="edit-profile-uuid-field"
                            id="outlined-multiline-flexible"
                            multiline
                            rows={3}
                            label="Bio"
                            name="bio"
                        />
                    </div>

                    <div className="edit-profile-uuid-field">
                        <TextField
                            className="edit-profile-uuid-field"
                            variant="outlined"
                            id="outlined-basic"
                            label="Location"
                        />
                    </div>
                    <div className="edit-profile-uuid-field">
                        <TextField
                            className="edit-profile-uuid-field"
                            variant="outlined"
                            name="website"
                            label="website"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
