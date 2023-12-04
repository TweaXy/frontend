import EditProfileWindowHeader from '../../components/userProfile_components/EditProfileWindowHeader';
import { Avatar } from '@mui/material';
import { MenuItem, TextField } from '@mui/material';
import '../userProfile/EditProfilePage.css';
import '../SignUpPage/SignUpPage.css';
import { CameraEnhanceOutlined } from '@mui/icons-material';
import { useState } from 'react';
import deleteBannerApi from '../../apis/deleteProfileBanner';
import deleteProfileApi from '../../apis/deleteProfileImage';
import { updateInfo } from '../../apis/updateInfo';
{
    /*}   src="https://www.istockphoto.com/photos/avatar-images-for-profile"*/
}

export default function EditProfilePage({
    onClose,
    authToken,
    name,
    cover,
    avatar,
}) {
    const [selectedImage, setSelectedImage] = useState(cover);
    const [ProfileImage, setProfileImage] = useState(avatar);
    const [ProfileData, changeProfileData] = useState({
        name: name,
        userbio: '',
        location: '',
        website: '',
    });
    const [Data2, changeData2] = useState({ day: '', month: '', year: '' });
    const saveHandler = () => {
        updateInfo(
            ProfileData.name,
            Data2,
            ProfileData.userbio,
            '01285075379',
            ProfileData.website,
            ProfileImage,
            selectedImage,
            ProfileData.location,
            authToken
        );
        onClose();
    };
    const handleNewImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    const updatepicture = () => {
        Pictureupload(avatar, authToken);
        
    };
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setProfileImage(reader.result);
                // onAvatarChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveAvatar = () => {
        setProfileImage(null);
    };

    const handleProfileImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const months = [
        { name: 'January', value: '0' },
        { name: 'February', value: '1' },
        { name: 'March', value: '2' },
        { name: 'April', value: '3' },
        { name: 'May', value: '4' },
        { name: 'June', value: '5' },
        { name: 'July', value: '6' },
        { name: 'August', value: '7' },
        { name: 'September', value: '8' },
        { name: 'October', value: '9' },
        { name: 'November', value: '10' },
        { name: 'December', value: '11' },
    ];
    console.log(authToken);
    const years = Array.from({ length: 121 }, (_, i) => 2023 - i);
    const Render_Days = () => {
        const days = Array.from({ length: 31 }, (_, i) => i + 1);
        if (
            Data2.month === '4' ||
            Data2.month === '6' ||
            Data2.month === '9' ||
            Data2.month === '11'
        ) {
            return days.filter((day) => day !== 31);
        } else if (Data2.month === '2') {
            const isLeapYear =
                (Data2.year % 4 === 0 && Data2.year % 100 !== 0) ||
                Data2.year % 400 === 0;
            return isLeapYear ? days.slice(0, 29) : days.slice(0, 28);
        }
        return days;
    };

    const ProfileData_Handler = (evt) => {
        const changedelement = evt.target.name;
        const newvalue = evt.target.value;
        changeProfileData((cur) => {
            cur[changedelement] = newvalue;
            return { ...cur };
        });
    };
    const Data2_Handler = (evt) => {
        const changedelement = evt.target.name;
        const newvalue = evt.target.value;
        changeData2((cur) => {
            cur[changedelement] = newvalue;
            return { ...cur };
        });
    };
    return (
        <>
            {' '}
            <div className="edit-profile-page-container">
                <div className="temp">
                    <EditProfileWindowHeader
                        onClose={onClose}
                        saveHandler={saveHandler}
                    />

                    <div className="edit-profile-page-body">
                        <div>
                            <div className="background-image">
                                <img
                                    width={' 590px'}
                                    className="image-position"
                                    src={selectedImage}
                                />
                                <CameraEnhanceOutlined className="image-upload-2" />
                                <input
                                    type="file"
                                    className="image-upload"
                                    onChange={handleNewImage}
                                />

                                <button
                                    className="remove-cover-button"
                                    onClick={() => {
                                        setSelectedImage('');
                                        deleteBannerApi(authToken);
                                    }}
                                >
                                    &times;
                                </button>

                                <div className="profile-image">
                                    <Avatar
                                        sx={{ width: 100, height: 100 }}
                                        src={ProfileImage}
                                    />
                                    <CameraEnhanceOutlined className="profile-upload-2" />
                                    <input
                                        type="file"
                                        className="profile-upload"
                                        onChange={handleAvatarChange}
                                    />
                                    <button
                                        className="remove-profile-button"
                                        onClick={() => {
                                            setProfileImage(null);
                                            deleteProfileApi(authToken);
                                        }}
                                    >
                                        &times;
                                    </button>

                                    {/*}     <AvatarEditor
                                        image={selectedImage}
                                        width={100}
                                        height={100}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                    
                                    />*/}
                                </div>
                            </div>
                        </div>
                        <div className="edit-profile-uuid-field">
                            <TextField
                                className="edit-profile-uuid-field"
                                variant="outlined"
                                id="outlined-basic"
                                label="Name"
                                name="name"
                                value={ProfileData.name}
                                onChange={ProfileData_Handler}
                            />
                        </div>
                        <div className="edit-profile-uuid-field">
                            <TextField
                                className="edit-profile-uuid-field"
                                id="outlined-multiline-flexible"
                                multiline
                                rows={3}
                                label="Bio"
                                name="userbio"
                                value={ProfileData.userbio}
                                onChange={ProfileData_Handler}
                            />
                        </div>

                        <div className="edit-profile-uuid-field">
                            <TextField
                                className="edit-profile-uuid-field"
                                variant="outlined"
                                id="outlined-basic"
                                label="Location"
                                name="location"
                                value={ProfileData.location}
                                onChange={ProfileData_Handler}
                            />
                        </div>
                        <div className="edit-profile-uuid-field">
                            <TextField
                                className="edit-profile-uuid-field"
                                variant="outlined"
                                name="website"
                                label="website"
                                value={ProfileData.website}
                                onChange={ProfileData_Handler}
                                /*helperText="Must be a valid Url"*/
                            />
                        </div>
                        <span className="date-birth-text">Date of Birth</span>
                        <div className="sign-up-birth-date">
                            <TextField
                                className="sign-up-birth-date-selection"
                                id="outlined-select-currency"
                                select
                                label="Month"
                                defaultValue="Select Month"
                                name="month"
                                value={Data2.month}
                                onChange={Data2_Handler}
                                sw={{
                                    width: '300px',
                                }}
                            >
                                {months.map((month) => (
                                    <MenuItem
                                        key={month.value}
                                        value={month.value}
                                    >
                                        {month.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className="sign-up-birth-date-selection"
                                id="outlined-select-currency"
                                select
                                label="Day"
                                defaultValue="Select Day"
                                name="day"
                                value={Data2.day}
                                onChange={Data2_Handler}
                                sw={{
                                    width: '300px',
                                }}
                            >
                                {Render_Days().map((day) => (
                                    <MenuItem key={day} value={day}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className="sign-up-birth-date-selection"
                                id="outlined-select-currency"
                                select
                                label="Year"
                                name="year"
                                defaultValue="Select Year"
                                value={Data2.year}
                                onChange={Data2_Handler}
                                sw={{
                                    width: '300px',
                                }}
                            >
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </TextField>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
