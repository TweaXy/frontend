import './SearchForUsersOrTweetsPage.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UsersCells from '../../components/UsersCells/UsersCells';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import { apiSearchForUsers } from '../../apis/SearchAPIs/SearchForUsersAPI';
import SearchForTweetsOrUsersHeader from '../../components/SearchForTweetsOrUsersHeader/SearchForTweetsOrUsersHeader';
import { useSelector } from 'react-redux';
import { apiGetTrendingTweets } from '../../apis/TrendingAPIs/GetTrendingTweetsAPI';

const SearchForUsersOrTweetsPage = () => {
    const location = useLocation();
    const searchInput = location.state?.search;
    const isSearch = location.state?.isSearch; // if isSearch is false then it is trends call
    const token = useSelector((state) => state.user.token);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwcTJnMTB4MDAyMjIwYmxuaGQ5bHZ3eFwiIiwiaWF0IjoxNzAxNjQzMjMyLCJleHAiOjE3MDQyMzUyMzJ9.iDJhBcxBfwxCX9NKk2eYqyXAJwWNRvcXzR_w-IrdibE";

    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [fetchedtweets, setFetchedTweets] = useState([]);

    console.log("the input for search is ", searchInput);

    const [curPage, setCurPage] = useState(isSearch ? 2 : 0);

    useEffect(() => {
        const fetchUsers = async () => {
            if (isSearch) {
                try {
                    const tempFetchedUsers = await apiSearchForUsers(searchInput, token);
                    setFetchedUsers(tempFetchedUsers);
                    console.log('these are the fetched users from the search: ', fetchedUsers);
                } catch (error) {
                    console.error('Error fetching searched users:', error);
                }
            }
            else {
                try {
                    const tempFetchedTweets = await apiGetTrendingTweets(searchInput, token);
                    setFetchedTweets(tempFetchedTweets);
                    console.log('these are the fetched Tweets from the trend: ', fetchedtweets);
                } catch (error) {
                    console.error('Error fetching trending tweets: ', error);
                }
            }
        };
        fetchUsers();
    }, [searchInput, isSearch]);

    useEffect(() => {
        setCurPage(isSearch ? 2 : 0);
    }, [searchInput]);
    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="Search-for-users-or-tweets-page-container">
            <Sidebar />
            <div className="search-for-tweets-or-users-widget">
                <SearchForTweetsOrUsersHeader
                    searchedInput={searchInput}
                    activePage={curPage}
                    setActivePage={setCurPage}
                    goBack={goBack}
                />
                {/* {curPage == 0 && ( TODO:: handle it later when the api for get trending tweets about some tweet is ready.
                    <UsersCells
                        users={fetchedUsers}
                    />
                )} */}
                {/* {curPage == 1 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )} */}
                {curPage == 2 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )}
                {/* {curPage == 3 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )} */}
                {/* {curPage == 4 && (
                    <UsersCells
                        users={fetchedUsers}
                    />
                )} */}
            </div>
            <Widget hideSearchBar={true}/>
        </div>
    );
};

export default SearchForUsersOrTweetsPage;
