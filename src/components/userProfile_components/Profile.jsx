import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import ProfileBio from "./ProfileBio";
function Profile({ token, username, name }) {
  return (
    <>
      <div className="profile">
        <ProfileHeader username="ebraam atef" noPosts={0} />
        <ProfileBio
         username="ebraam atef"
         userEmail="ebraamatef"
         followingNum={2}
         followersNum={1}
        
         name={name}
         token={token}
        />
      </div>
    </>
  );
}

export default Profile;
