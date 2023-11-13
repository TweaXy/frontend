import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./ProfileHeader.css"

const ProfileHeader = () => {
  let navigate =useNavigate();
  const arrowBackRoute =() => navigate(-1)
  return (
    <div className="profile-header">
      <div className="container">
        <BiArrowBack  color="black" size={20} className="arrow" onClick={arrowBackRoute}/>
        <div>
            <span className="text-name">ebraam atef</span>
            <span className="text-posts">2 Posts</span>
          </div>
      </div>
    </div>
  );
}

export default ProfileHeader;