import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import ProfileBio from "./ProfileBio";
function Profile() {
  return (
    <>
      <div className="profile">
        <ProfileHeader />
        <ProfileBio />
      </div>
    </>
  );
}

export default Profile;
