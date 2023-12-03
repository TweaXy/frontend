import './SearchForUsersOrTweetsPage.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import { apiSearchForUsers } from '../../apis/SearchForUsersAPI';
import SearchForTweetsOrUsersHeader from '../../components/SearchForTweetsOrUsersHeader/SearchForTweetsOrUsersHeader';
import { useSelector } from 'react-redux';

const SearchForUsersOrTweetsPage = () => {
    const location = useLocation();
    const searchInput = location.state?.search;
    const token = useSelector((state) => state.user.token);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwcTJnMTB4MDAyMjIwYmxuaGQ5bHZ3eFwiIiwiaWF0IjoxNzAxNjQzMjMyLCJleHAiOjE3MDQyMzUyMzJ9.iDJhBcxBfwxCX9NKk2eYqyXAJwWNRvcXzR_w-IrdibE";

    const [fetchedUsers, setFetchedUsers] = useState([]);

    console.log("the input for search is ", searchInput);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const tempFetchedUsers = await apiSearchForUsers(searchInput, token);
                setFetchedUsers(tempFetchedUsers);
                console.log('these are the fetched users from the search: ', fetchedUsers);
            } catch (error) {
                console.error('Error fetching searched users:', error);
            }
        };
        fetchUsers();
    }, [searchInput]);
    
    const [curPage, setCurPage] = useState(2);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="Search-for-users-or-tweets-page-container">
            <Sidebar />
            <div className="search-for-tweets-or-users-widget">
                <SearchForTweetsOrUsersHeader
                    name="Hamdy"
                    username="hamdysalem503_71627765"
                    activePage={curPage}
                    setActivePage={setCurPage}
                    goBack={goBack}
                />
                {curPage == 0 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )}
                {curPage == 1 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )}
                {curPage == 2 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )}
                {curPage == 3 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )}
                {curPage == 4 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )}
            </div>
            <Widget />
        </div>
    );
};

export default SearchForUsersOrTweetsPage;
