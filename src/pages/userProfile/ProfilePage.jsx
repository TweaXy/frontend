import './HomePage.css';
import Sidebar from '../../components/homePage_components/Sidebar';
import Profile from '../../components/userProfile_components/Profile';
import Widget from '../../components/homePage_components/Widget';
import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import getUserDataApi from '../../apis/getProfileData';
import { useLocation } from 'react-router';
import { clearUser } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const ProfilePage = () => {
    // const dispatch = useDispatch();
       // const navigate=useNavigate();
     //useEffect(()=>{
        //dispatch(clearUser());
       // navigate('/');
     //},[])
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [userData, setUserData] = useState({});

    const location = useLocation();
    const userID = location.state?.userID;

    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);
    const currUserId= useSelector((state) => state.user.user.id);
    // console.log('token from profile: ', token);
    // console.log('user id from profile:', userID);
    // console.log('user id from profile:', currUserId);

    useEffect(() => {
        if (token && userID && user) {
            setUserData({user, token});
            setIsPageLoading(false);
            console.log('user id from profile page', userID);
            console.log('user token from profile page', token);
        } else {
            console.log('profile page is loading');
        }
    }, [token, userID, user]);

    if (isPageLoading) {
        return (
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <div className="home-page">
                {/**Side bar */}
                <Sidebar userData={userData} active={1} />
                {/**News feed */}

                <Profile token={token} userID={userID} currUserId={currUserId} />

                {/**Widgets */}
                <Widget />
            </div>
        </>
    );
};

export default ProfilePage;
