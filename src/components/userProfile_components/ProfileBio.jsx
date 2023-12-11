import { BiCalendar } from 'react-icons/bi';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ProfileBio.css';
import EditProfile from './EditProfileButton';
import parseDate from '../../utils/parseDate';
import { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ProfilePageSelectors from '../../shared/selectors/ProfilePage';
const ProfileBio = (props) => {
    const navigate = useNavigate();
    const [isFollowing, setFollowing] = useState(false);
    console.log('idProfile', props.IdProfile);
    console.log('idUser', props.currUserId);
    const toggleFollow = () => {
        setFollowing(!isFollowing);
    };
    const navigateToFollowingPage = () => {
        navigate(`/${props.username}/following`, {
            state: {
                name: props.name,
                username: props.username,
                userID: props.IdProfile,
            },
        });
    };

    const navigateToFollowersPage = () => {
        navigate(`/${props.username}/followers`, {
            state: {
                name: props.name,
                username: props.username,
                userID: props.IdProfile,
            },
        });
    };

    return (
        <div className="biocontainer">
            <div className="backgroundImage">
                <img src={props.coverImage} alt="" />
            </div>

            <div className="profileTitle">
                <div className="profileImage">
                    <Avatar
                        sx={{ width: 134, height: 134 }}
                        src={props.ProfileImage}
                    />
                </div>
                {props.IdProfile === props.currUserId ? (
                    <EditProfile
                        name={props.name}
                        cover={props.coverImage}
                        bio={props.bio}
                        location={props.location}
                        website={props.website}
                        avatar={props.ProfileImage}
                        authToken={props.token}
                    />
                ) : (
                    <div
                        className="editProfile"
                        onClick={toggleFollow}
                        data-test={ProfilePageSelectors.FOLLOW_UNFOLLOW_BUTTON}
                    >
                        <span>{isFollowing ? 'Unfollow' : 'Follow'}</span>
                    </div>
                )}
            </div>
            <div className="profileBiography">
                <span className="profileBiography-username">{props.name}</span>
                <span className="profileBiography-email">
                    @{props.username}
                </span>
                <div className="profileBiography-dateMargin">
                    <span className="profileBiography-Bio">
                        {props.bio === 'null' ? '' : props.bio}
                    </span>
                </div>
                <div className="profileBiography-dateMargin">
                    <span className="location">
                        {props.location === 'null' ? '' : props.location}
                    </span>
                    <span className="profileBiography-Bio"> </span>
                    <span className="pseudolink">
                        {props.website === 'null' ? '' : props.website}
                    </span>
                    <span className="profileBiography-joinDate">
                        <BiCalendar /> Joined {parseDate(props.JoinedAt)}
                    </span>
                </div>
            </div>
            <div className="profile-div-followers">
                <span className="follow-link" onClick={navigateToFollowingPage}>
                    <span className="profile-distance-between">
                        <span
                            className="profile-followers-following-number"
                            data-test={ProfilePageSelectors.FOLLOWING_COUNT}
                        >
                            {props.followingNum}
                        </span>
                        <span
                            className="profile-followers-following-text"
                            data-test={ProfilePageSelectors.FOLLOWING_LINK}
                        >
                            Following
                        </span>
                    </span>
                </span>
                <span className="follow-link" onClick={navigateToFollowersPage}>
                    <span
                        className="profile-followers-following-number"
                        data-test={ProfilePageSelectors.FOLLOWERS_COUNT}
                    >
                        {' '}
                        {props.followersNum}
                    </span>
                    <span
                        className="profile-followers-following-text"
                        data-test={ProfilePageSelectors.FOLLOWERS_LINK}
                    >
                        Followers
                    </span>
                </span>
            </div>
        </div>
    );
};

export default ProfileBio;
