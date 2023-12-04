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
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Sidebar({ userData, active }) {
    const path = '../assets/logo2.ico';
    const [activeHome, setActiveHome] = useState(active == 0);
    const [activeProfile, setActiveProfile] = useState(active == 1);
    const navigate = useNavigate();

    const toProfile = () => {
        setActiveHome(false);
        setActiveProfile(true);
        navigate(`/profile/${userData.user.username}`, {
            state: { userData: { userData } },
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
            <div onClick={toProfile}>
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
                <SidebarOption text="Settings" Icon={SettingsIcon} />
            </div>
            <Button variant="outlined" className="sidebar--tweet">
                Post
            </Button>
        </div>
    );
}
