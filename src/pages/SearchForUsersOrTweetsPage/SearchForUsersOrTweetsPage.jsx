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
import Tweet from '../../components/homePage_components/Tweet.jsx';

const SearchForUsersOrTweetsPage = () => {
    const location = useLocation();
    const searchInput = location.state?.search;
    const isSearch = location.state?.isSearch; // if isSearch is false then it is trends call
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);
    const userData = { user, token };
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwcTJnMTB4MDAyMjIwYmxuaGQ5bHZ3eFwiIiwiaWF0IjoxNzAxNjQzMjMyLCJleHAiOjE3MDQyMzUyMzJ9.iDJhBcxBfwxCX9NKk2eYqyXAJwWNRvcXzR_w-IrdibE";

    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [fetchedtweets, setFetchedTweets] = useState([]);

    const [curPage, setCurPage] = useState(isSearch ? 2 : 0);

    useEffect(() => {
        const fetchUsers = async () => {
            if (isSearch) { // TODO: add the tweets fetch here whenever the api is ready.
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
            <Sidebar userData={userData} active={0}/>
            <div className="search-for-tweets-or-users-widget">
                <SearchForTweetsOrUsersHeader
                    searchedInput={isSearch ? searchInput : '"'+searchInput+'"'}
                    activePage={curPage}
                    setActivePage={setCurPage}
                    goBack={goBack}
                />
                {curPage == 0 && ( 
                    fetchedtweets.map((tweet) => (
                            <Tweet
                                avatar={tweet.mainInteraction.avatar}
                                username={tweet.mainInteraction.user.name}
                                handle={tweet.mainInteraction.user.username}
                                uploadTime={tweet.mainInteraction.createdDate}
                                tweetText={tweet.mainInteraction.text}
                                tweetMedia={tweet.mainInteraction.media}
                                replies={tweet.mainInteraction.commentsCount}
                                reposts={tweet.mainInteraction.retweetsCount}
                                likes={tweet.mainInteraction.likesCount}
                                insights={tweet.mainInteraction.viewsCount}
                                tweetId={tweet.mainInteraction.id}
                                isUserLiked={tweet.mainInteraction.isUserInteract.isUserLiked}
                                token={userData.token}
                                userID={tweet.mainInteraction.user.id}
                            />
                        ))
                )}
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
