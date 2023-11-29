import './FollowingFollowersPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import FollowingFollowersHeader from '../../components/FollowingFollowersHeader/FollowingFollowersHeader';

const FollowingFollowersPage = ({ activePage }) => {
    const [curPage, setCurPage] = useState(activePage == 'followers' ? 0 : 1);
    const navigate = useNavigate();

    const goBackToProfile = () => {
        navigate('profile');
    };

    return (
        <div className="followers-page-container">
            <Sidebar />
            <div className="following-followers-widget">
                <FollowingFollowersHeader
                    name={'Hamdy Salem'}
                    username={'itsHamdySalem'}
                    activePage={curPage}
                    setActivePage={setCurPage}
                    goBackToProfile={goBackToProfile}
                />
                {curPage == 0 && (
                    <UsersCells curPage={curPage} username={'itsHamdySalem'} />
                )}
                {curPage == 1 && (
                    <UsersCells curPage={curPage} username={'itsHamdySalem'} />
                )}
            </div>
            <Widget />
        </div>
    );
};

export default FollowingFollowersPage;
