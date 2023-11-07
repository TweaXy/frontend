import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./ProfileHeader.css"

const ProfileHeader = () => {

  return (
    <div className="header">
      <div className="container">
        <BiArrowBack  color="black" size={18} className="arrow"/>
        <h1 className="text">
          ebraam atef
        </h1>
      </div>
    </div>
  );
}

export default ProfileHeader;