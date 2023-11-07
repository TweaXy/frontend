import SidebarOption from "./SidebarOption";
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
import './Sidebar.css'
export default function Sidebar(){

    return(
        <div className="sidebar">
            {/**Icon */}
            <TwitterIcon className="twitter--icon"/>
            
            {/**Sidebar Option */}
            <SidebarOption active={1} text="Home" Icon={HomeOutlinedIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOption text="Lists" Icon={ListAltIcon}/>
            <SidebarOption text="Communities" Icon={PeopleOutlineIcon}/>
           <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
           <SidebarOption text="More" Icon={MoreHorizIcon}/>
           <Button variant="outlined" className="sidebar--tweet">Post</Button>
           
           
        </div>

    );
}