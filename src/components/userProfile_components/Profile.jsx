import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import ProfileBio from "./ProfileBio";
function Profile() {
  return (
    <>
      <div className="profile">
        <ProfileHeader username="ebraam atef" noPosts={0} />
        <ProfileBio
         username="ebraam atef"
         userEmail="ebraamatef"
         followingNum={2}
         followersNum={1}
         
        />
      </div>
    </>
  );
}

export default Profile;
