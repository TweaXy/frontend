import './MuteSettingsPage.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import getMutedUsers from '../../apis/getMutedUsers';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Sidebar from '../../components/homePage_components/Sidebar';
import MutedUsersCells from '../../components/MutedUsersCells/MutedUsersCells';

const MuteSettingsPage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [mutedUsers, setMutedUsers] = useState([]);

    const [isPageLoading, setIsPageLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (token && user) {
            setIsPageLoading(false);
        }
    }, [token, user]);

    useEffect(() => {
        const getMutedUsersList = async () => {
            try {
                const curMutedUsers = await getMutedUsers(token);
                setMutedUsers(curMutedUsers);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (token) {
            getMutedUsersList();
        }
    }, [token]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="mute-settings-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="mute-settings-widget">
                <div className="mute-settings-header">
                    <div
                        className="arrow-back"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <div className="shadow">
                            <ArrowBack />
                        </div>
                    </div>
                    <span>Muted accounts</span>
                </div>
                <div className="mute-settings-body">
                    <div className="span-wrapper">
                        <span>
                            Here's everyone you muted. You can add or remove
                            them from this list.
                        </span>
                    </div>
                    <div className="muted-users-cells">
                        <MutedUsersCells mutedUsers={mutedUsers} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MuteSettingsPage;
