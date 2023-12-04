import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import getUserDataApi from '../../apis/getProfileData';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Sidebar({ userData, active }) {
    const [activeHome, setActiveHome] = useState(active == 0);
    const [activeProfile, setActiveProfile] = useState(active == 1);
    const navigate = useNavigate();

    console.log('sidebar user data:', userData);

    const toProfile = () => {
        setActiveProfile(1);
        setActiveHome(0);

        navigate(`/profile/${userData.user.username}`, {
            state: { userID: userData.user.id },
        });
    };

    const toHome = () => {
        setActiveHome(1);
        setActiveProfile(0);
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
            <SidebarOption text="More" Icon={MoreHorizIcon} />
            <Button variant="outlined" className="sidebar--tweet">
                Post
            </Button>
        </div>
    );
}
