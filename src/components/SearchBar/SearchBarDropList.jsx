import './SearchBarDropList.css';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { apiSearchForUsers } from '../../apis/SearchAPIs/SearchForUsersAPI';
import UserCellInDropList from './UserCellInDropList';
import MenuList from '@mui/material/MenuList';
import LoadingPage from '../LoadingPage/LoadingPage';

export default function SearchBarDropList({ searchInput }) {
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const token = useSelector((state) => state.user.token);
    const myID = useSelector((state) => state.user.user).id;

    // console.log('HERE IS THE TEXT CONVEYED TO THE DROP LIST: ', searchInput);

    useEffect(() => {
        if (token && myID) {
            setIsPageLoading(false);
        }
    }, [token, myID]);

    useEffect(() => {
        const fetchUsers = async () => {
            if (searchInput.length > 0) {
                try {
                    const tempFetchedUsers = await apiSearchForUsers(
                        searchInput,
                        token
                    );
                    setFetchedUsers(tempFetchedUsers);
                    console.log(
                        'these are the fetched users from the search: ',
                        fetchedUsers
                    );
                } catch (error) {
                    console.error('Error fetching searched users:', error);
                }
            } else setFetchedUsers([]);
        };
        fetchUsers();
    }, [searchInput, fetchedUsers, token]);

    if (isPageLoading) {
        return <LoadingPage />;
    }

    return (
        <MenuList className="users-cells-container-in-droplist-container">
            {fetchedUsers.map((user) => (
                <UserCellInDropList
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    avatar={user.avatar}
                    bio={user.bio}
                    followsMe={user.followsMe}
                    followedByMe={user.followedByMe}
                    token={token}
                    myID={myID}
                />
            ))}
        </MenuList>
    );
}
