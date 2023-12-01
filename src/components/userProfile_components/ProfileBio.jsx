import { BiCalendar } from 'react-icons/bi';
import { Avatar } from '@mui/material';
import './ProfileBio.css';
import EditProfile from './EditProfileButton';
const ProfileBio = (props) => {
    return (
        <div className="biocontainer">
            <div className="backgroundImage">
                <img src={props.coverImage} alt="" />
            </div>
            <div className="profileTitle">
                <div className="profileImage">
                    <Avatar
                        sx={{ width: 134, height: 134 }}
                        src="https://www.istockphoto.com/photos/avatar-images-for-profile"
                    />
                </div>
                <EditProfile authToken={props.token} />
            </div>
            <div className="profileBiography">
                <span className="profileBiography-username">
                    {props.username}
                </span>
                <span className="profileBiography-email">
                    @{props.userEmail}
                </span>
                <div className="profileBiography-dateMargin">
                    <span className="profileBiography-Bio">
                        {props.userBio}
                    </span>
                    <span className="profileBiography-joinDate">
                        <BiCalendar /> Joined December 2011
                    </span>
                </div>
            </div>
            <div className="profile-div-followers">
                <span className="follow-link">
                    <span className="profile-distance-between">
                        <span className="profile-followers-following-number">
                            {props.followingNum}
                        </span>
                        <span className="profile-followers-following-text">
                            Following
                        </span>
                    </span>
                </span>
                <span className="follow-link">
                    <span className="profile-followers-following-number">
                        {' '}
                        {props.followersNum}
                    </span>
                    <span className="profile-followers-following-text">
                        Followers
                    </span>
                </span>
            </div>
        </div>
    );
};

export default ProfileBio;
