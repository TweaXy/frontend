import './BlockedUsersCells.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import BlockedUserCell from '../BlockedUserCell/BlockedUserCell';

const BlockedUsersCells = ({ blockedUsers }) => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (blockedUsers && token) {
            setIsPageLoading(false);
        }
    }, [blockedUsers, token]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    if (blockedUsers.length === 0) {
        return (
            <div className="no-blocked-users-container">
                <div className="span-container">
                    <span className="header-span">Blocked accounts</span>
                    <span className="body-span">
                        When you block someone, that person won’t be able to
                        follow or message you, and you won’t see notifications
                        from them.
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="blocked-users-cells-container">
            {blockedUsers.map((blockedUser) => (
                <BlockedUserCell
                    key={blockedUser.id}
                    id={blockedUser.id}
                    name={blockedUser.name}
                    username={blockedUser.username}
                    avatar={blockedUser.avatar}
                    bio={blockedUser.bio}
                    token={token}
                />
            ))}
        </div>
    );
};

export default BlockedUsersCells;
