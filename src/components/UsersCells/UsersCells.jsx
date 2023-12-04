import './UsersCells.css';
import UserCell from '../UserCell/UserCell';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const UsersCells = ({ users }) => {
    const [isPageLoading, setIsPageLoading] = useState(users === undefined);

    useEffect(() => {
        if (users !== undefined) {
            setIsPageLoading(false);
        }
    }, [users]);

    if (isPageLoading) {
        return (
            <div className="circular-progress-spinner">
                <CircularProgress />
            </div>
        );
    }

    if (users.length === 0) {
        return <></>;
    }

    return (
        <div className="users-cells-container">
            {users.map((user) => (
                <UserCell
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    avatar={user.avatar}
                    bio={user.bio}
                    followsMe={user.followsMe}
                    followedByMe={user.followedByMe}
                />
            ))}
        </div>
    );
};

export default UsersCells;
