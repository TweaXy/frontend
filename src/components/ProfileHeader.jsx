import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./ProfileHeader.css"

const ProfileHeader = () => {

  return (
    <div className="profile-header">
      <div className="container">
        <BiArrowBack  color="black" size={20} className="arrow"/>
        <div>
            <span className="text-name">ebraam atef</span>
            <span className="text-posts">2 Posts</span>
          </div>
      </div>
    </div>
  );
}

export default ProfileHeader;