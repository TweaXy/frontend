import './BlockSettingsPage.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import getBlockedUsers from '../../apis/getBlockedUsers';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Sidebar from '../../components/homePage_components/Sidebar';
import BlockedUsersCells from '../../components/BlockedUsersCells/BlockedUsersCells';

const BlockSettingsPage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [blockedUsers, setBlockedUsers] = useState([]);

    const [isPageLoading, setIsPageLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (token && user) {
            setIsPageLoading(false);
        }
    }, [token, user]);

    useEffect(() => {
        const getBlockedUsersList = async () => {
            try {
                const curBlockedUsers = await getBlockedUsers(token);
                setBlockedUsers(curBlockedUsers);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (token) {
            getBlockedUsersList();
        }
    }, [token]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="block-settings-page-container">
            <Sidebar userData={{ user, token }} active={2} />
            <div className="block-settings-widget">
                <div className="block-settings-header">
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
                    <span>Blocked accounts</span>
                </div>
                <div className="block-settings-body">
                    <div className="span-wrapper">
                        <span>
                            Here's everyone you blocked. You can add or remove
                            them from this list.
                        </span>
                    </div>
                    <div className="blocked-users-cells">
                        <BlockedUsersCells blockedUsers={blockedUsers} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockSettingsPage;
