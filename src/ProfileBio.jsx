import { BiCalendar } from "react-icons/bi";

import "./ProfileBio.css";

const ProfileBio = () => {
  return (
    <div className="biocontainer">
      <div className="profileBiography">
        <span className="profileBiography-username">ebraam atef</span>
        <span className="profileBiography-email">@ebraamatef</span>
        <div className="profileBiography-dateMargin">
          <span className="profileBiography-joinDate">
            <BiCalendar />
            Joined December 2011
          </span>
        </div>
      </div>
      <div className="profile-div-followers">
        <span className="profile-distance-between">
          <span className="profile-followers-following-number">1</span>
          <span className="profile-followers-following-text">Following</span>
        </span>
        <span>
          <span className="profile-followers-following-number">0</span>
          <span className="profile-followers-following-text">Followers</span>
        </span>
      </div>
    </div>
  );
};

export default ProfileBio;