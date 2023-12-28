import './ProfileBio.css';
import { BiCalendar } from 'react-icons/bi';
import { Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfileButton';
import parseDate from '../../utils/parseDate';
import { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkIcon from '@mui/icons-material/Link';
import unfollow from '../../apis/unfollow';
import follow from '../../apis/follow';
import ProfilePageSelectors from '../../shared/selectors/ProfilePage';
import { MoreHoriz } from '@mui/icons-material';
import ProfileMoreOptionsPopDown from '../ProfileMoreOptionsPopDown/ProfileMoreOptionsPopDown';
import BlockUserWindow from '../BlockUserWindow/BlockUserWindow';
import block from '../../apis/block';
import unblock from '../../apis/unblock';
import createConversation from '../../apis/createConversation';
const ProfileBio = (props) => {
    const [isFollowingButtonHovered, setIsFollowingButtonHovered] =
        useState(false);

    const [followedByMeState, setFollowedByMeState] = useState(
        props.followedByMe
    );

    const handleFollowingButtonHover = () => {
        setIsFollowingButtonHovered(!isFollowingButtonHovered);
    };

    const onButtonClick = async (event) => {
        event.stopPropagation();
        if (followedByMeState) {
            if (await unfollow(props.username, props.token)) {
                setFollowedByMeState(false);
                props.actionOccurredHandler(
                    `You unfollowed @${props.username}`
                );
            }
        } else {
            if (await follow(props.username, props.token)) {
                setFollowedByMeState(true);
                props.actionOccurredHandler(`You followed @${props.username}`);
            }
        }
    };

    const navigate = useNavigate();

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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMoreButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMoreOptionsMenu = () => {
        setAnchorEl(null);
    };

    const [blockButtonText, setBlockButtonText] = useState('Block');
    const [isBlockUserWindowOpened, setIsBlockUserWindowOpened] =
        useState(false);

    const handleBlockUserWindowClose = () => {
        setIsBlockUserWindowOpened(false);
    };

    const handleBlockButtonClick = () => {
        setIsBlockUserWindowOpened(true);
    };

    const handleOnBlockButtonMouseEnter = () => {
        setBlockButtonText('Unblock');
    };

    const handleOnBlockButtonMouseLeave = () => {
        setBlockButtonText('Block');
    };

    const handleBlockUser = async () => {
        if (await unblock(props.username, props.token)) {
            window.location.reload();
        }
    };

    const handleChatWithUser = async () => {
        try {
            const conversationInfo = await createConversation(
                props.username,
                props.token
            );

            navigate('/conversations', {
                state: { conversationInfo: conversationInfo },
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="biocontainer">
            <div className="backgroundImage">
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    src={`https://tweaxybackend.mywire.org/api/v1/images/${props.coverImage}`}
                    alt=""
                />
            </div>

            <div className="profileTitle">
                <div className="profileImage">
                    <Avatar
                        sx={{ width: 134, height: 134 }}
                        src={`https://tweaxybackend.mywire.org/api/v1/images/${props.ProfileImage}`}
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
                    <div className="profile-buttons-container">
                        <div className="icon-btn-wrapper">
                            <IconButton
                                onClick={handleChatWithUser}
                                style={{
                                    border: '1px solid var(--twitter-background)',
                                }}
                            >
                                <EmailOutlinedIcon style={{ color: 'black' }} />
                            </IconButton>
                        </div>
                        <div className="icon-btn-wrapper">
                            <IconButton
                                onClick={handleMoreButtonClick}
                                aria-label="more"
                                style={{
                                    border: '1px solid var(--twitter-background)',
                                }}
                            >
                                <MoreHoriz style={{ color: 'black' }} />
                            </IconButton>
                        </div>
                        <ProfileMoreOptionsPopDown
                            handleClose={closeMoreOptionsMenu}
                            anchorEl={anchorEl}
                            username={props.username}
                            userID={props.IdProfile}
                            token={props.token}
                            MutedByMe={props.MutedByMe}
                            blockedByMe={props.blockedByMe}
                        />
                        {props.blocksMe ? (
                            <></>
                        ) : props.blockedByMe ? (
                            <button
                                className="red-btn"
                                onClick={handleBlockButtonClick}
                                onMouseEnter={handleOnBlockButtonMouseEnter}
                                onMouseLeave={handleOnBlockButtonMouseLeave}
                            >
                                {blockButtonText}
                            </button>
                        ) : (
                            <div
                                className="editProfile"
                                onClick={onButtonClick}
                                onMouseEnter={handleFollowingButtonHover}
                                onMouseLeave={handleFollowingButtonHover}
                                data-test={
                                    ProfilePageSelectors.FOLLOW_UNFOLLOW_BUTTON
                                }
                            >
                                <span>
                                    {followedByMeState === false
                                        ? 'Follow'
                                        : isFollowingButtonHovered
                                        ? 'Unfollow'
                                        : 'Following'}
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="profileBiography">
                <span className="profileBiography-username">{props.name}</span>
                <span className="profileBiography-email">
                    @{props.username}
                </span>
                {!props.blocksMe && props.viewTweets && (
                    <div className="profileBiography-dateMargin">
                        <span className="profileBiography-Bio">
                            {props.bio === 'null' ? '' : props.bio}
                        </span>
                    </div>
                )}
                {!props.blocksMe && props.viewTweets && (
                    <div className="profileBiography-dateMargin">
                        <span className="location">
                            {props.location && (
                                <>
                                    <LocationOnOutlinedIcon />
                                    {props.location === 'null'
                                        ? ' '
                                        : props.location}
                                </>
                            )}
                        </span>
                        <span className="profileBiography-Bio"> </span>{' '}
                        <span className="pseudolink">
                            {props.website && (
                                <>
                                    <LinkIcon className="linkIcon" /> {'  '}
                                    <a
                                        className="linkIcon"
                                        href={props.website}
                                    >
                                        {' '}
                                        {props.website}
                                    </a>
                                </>
                            )}
                        </span>
                        <span className="profileBiography-joinDate">
                            <BiCalendar /> Joined {parseDate(props.JoinedAt)}
                        </span>
                    </div>
                )}
            </div>
            {!props.blocksMe && (
                <div className="profile-div-followers">
                    <span
                        className="follow-link"
                        onClick={navigateToFollowingPage}
                    >
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
                    <span
                        className="follow-link"
                        onClick={navigateToFollowersPage}
                    >
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
            )}
            <BlockUserWindow
                openWindow={isBlockUserWindowOpened}
                closeWindow={handleBlockUserWindowClose}
                handleUserBlock={handleBlockUser}
                username={props.username}
                isUserBlocked={true}
            />
        </div>
    );
};

export default ProfileBio;
