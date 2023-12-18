import './MutedUsersCells.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import MutedUserCell from '../MutedUserCell/MutedUserCell';

const MutedUsersCells = ({ mutedUsers }) => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (mutedUsers && token) {
            setIsPageLoading(false);
        }
    }, [mutedUsers, token]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    if (mutedUsers.length === 0) {
        return (
            <div className="no-muted-users-container">
                <div className="span-container">
                    <span className="header-span">Muted accounts</span>
                    <span className="body-span">
                        Posts from muted accounts won't show up in your Home
                        timeline. Mute accounts directly from their profile or
                        post.
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="muted-users-cells-container">
            {mutedUsers.map((mutedUser) => (
                <MutedUserCell
                    key={mutedUser.id}
                    id={mutedUser.id}
                    name={mutedUser.name}
                    username={mutedUser.username}
                    avatar={mutedUser.avatar}
                    bio={mutedUser.bio}
                    token={token}
                />
            ))}
        </div>
    );
};

export default MutedUsersCells;
