import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
  const path = "../assets/logo2.ico";
  const [activeHome, setActiveHome] = useState(1);
 const  [activeProfile, setActiveProfile] =useState(0);
  const navigate = useNavigate();
  const toProfile = () => {
    navigate("/profile");
    setActiveHome(0);
    setActiveProfile(1);
  };
  const toHome = () => {
    navigate("/home");
    setActiveProfile(0);
  };
  return (
    <div className="sidebar">
      {/**Icon */}
      <TwitterIcon className="twitter--icon" />
      {/* <img src={path} alt="tweexy-logo" /> */}

      {/**Sidebar Option */}
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
