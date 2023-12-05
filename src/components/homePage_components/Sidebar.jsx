import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import getUserDataApi from '../../apis/getProfileData';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HomePageSelectors from '../../shared/selectors/HomePage';

export default function Sidebar({ userData, active }) {
    const [activeHome, setActiveHome] = useState(active == 0);
    const [activeProfile, setActiveProfile] = useState(active == 1);
    const navigate = useNavigate();

    console.log('sidebar user data:', userData);

    const toProfile = () => {
        setActiveHome(false);
        setActiveProfile(true);
        navigate(`/profile/${userData.user.username}`, {
            state: { userID: userData.user.id },
        });
    };

    const toHome = () => {
        setActiveHome(true);
        setActiveProfile(false);
        navigate('/home', {
            state: { userData: { userData }, firstTime: false },
        });
    };
    return (
        <div className="sidebar">
            <TwitterIcon className="twitter--icon" />

            <div onClick={toHome}>
                <SidebarOption
                    active={activeHome}
                    text="Home"
                    Icon={HomeOutlinedIcon}
                />
            </div>
            <SidebarOption text="Explore" Icon={SearchIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Messages" Icon={MailOutlineIcon} />
            <SidebarOption text="Lists" Icon={ListAltIcon} />
            <SidebarOption text="Communities" Icon={PeopleOutlineIcon} />
            <div data-test={HomePageSelectors.PROFILE_BUTTON} onClick={toProfile}>
                <SidebarOption     
                    active={activeProfile}
                    text="Profile"
                    Icon={PermIdentityIcon}
                />
            </div>
            <div
                onClick={() => {
                    navigate('/settings');
                }}
            >
                <SidebarOption text="Settings" Icon={SettingsIcon} active={active == 2}/>
            </div>
            <Button variant="outlined" className="sidebar--tweet">
                Post
            </Button>
        </div>
    );
}
