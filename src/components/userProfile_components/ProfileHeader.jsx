import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './ProfileHeader.css';
import ProfilePageSelectors from '../../shared/selectors/ProfilePage';
const ProfileHeader = (props) => {
    let navigate = useNavigate();
    const arrowBackRoute = () => navigate(-1);
    return (
        <div className="profile-header">
            <div className="container">
                <BiArrowBack
                    color="black"
                    size={20}
                    className="arrow"
                    onClick={arrowBackRoute}
                    data-test={ProfilePageSelectors.BACK_TO_PROFILE}
                />
                <div>
                    <span className="text-name">{props.username}</span>
                    <span className="text-posts">{props.noPosts} Posts</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
