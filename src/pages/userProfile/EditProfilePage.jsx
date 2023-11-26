import EditProfileWindowHeader from '../../components/userProfile_components/EditProfileWindowHeader';
import { Avatar } from '@mui/material';
import { MenuItem, TextField } from '@mui/material';
import '../userProfile/EditProfilePage.css';
import '../SignUpPage/SignUpPage.css';
import { useState } from 'react';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
export default function EditProfilePage({ onClose }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const [Data1, changeData1] = useState({
        username: '',
        userbio: '',
        location: '',
        website: '',
    });
    const [Data2, changeData2] = useState({ day: '', month: '', year: '' });

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
    return (
        <>
            {' '}
            <div className="edit-profile-page-container">
                <div className="temp">
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
                        <div>
                            <div className="background-image">
                                <img alt="" src={selectedImage} />
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
                        </div>
                        <div></div>
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
                        <span className="date-birth-text">Date of Birth</span>
                        <div className="sign-up-birth-date">
                            <TextField
                                className="sign-up-birth-date-selection"
                                id="outlined-select-currency"
                                select
                                label="Month"
                                defaultValue="Select Month"
                                name="month"
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
