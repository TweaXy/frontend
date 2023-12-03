import './SearchForUsersOrTweetsPage.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UsersCells from '../../components/UsersCells/UsersCells';
import UserCell from '../../components/UserCell/UserCell';
import Widget from '../../components/homePage_components/Widget';
import Sidebar from '../../components/homePage_components/Sidebar';
import { apiSearchForUsers } from '../../apis/SearchForUsersAPI';
import SearchForTweetsOrUsersHeader from '../../components/SearchForTweetsOrUsersHeader';
import { token } from 'stylis';

const SearchForUsersOrTweetsPage = ({route}) => {
    const location = useLocation();
    const searchInput = location.state?.search;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwb2puejV6MDAxNmV5a3RqY29qbGkzNlwiIiwiaWF0IjoxNzAxNTUxMjI0LCJleHAiOjE3MDQxNDMyMjR9.f0FOmr3hwUV3UgB6S72E_T7tbIHVTXdLeFR8LuuO7cs";
    // TODO:: modify it later
    // const token = location.state?.token;
    // console.log(activePage, token);

    const [fetchedUsers, setFetchedUsers] = useState([]);

    console.log("hey bitch ", searchInput);

    const fetchUsers = async () => {
        try {
            const tempFetchedUsers = await apiSearchForUsers(searchInput, token);
            setFetchedUsers(tempFetchedUsers);
            console.log('these are the fetched users from the search: ', fetchedUsers);
        } catch (error) {
            console.error('Error fetching searched users:', error);
        }
    };
    
    const [curPage, setCurPage] = useState(searchInput == 'followers' ? 0 : 1);
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
                    goBackToProfile={goBack}
                />
                {/*TODO:: Add the other searched taps*/}
                {/* {users.map((user) => (
                <UserCell
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    avatar={user.avatar}
                    bio={user.bio}
                    followsMe={user.followsMe}
                    followedByMe={user.followedByMe}
                />
            ))} */}
                {curPage == 0 && (
                    <UsersCells
                        curPage={curPage}
                        username="hamdysalem503_71627765"
                        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwams0dDdxMDAwNDJ2aGgzY244cjB6NVwiIiwiaWF0IjoxNzAxMzAyOTMwLCJleHAiOjE3MDM4OTQ5MzB9.mQYsIGIrhDX_aJsFNRzjFKBi18MiQVtVGgaP-tAmkto"
                    />
                )}
                {curPage == 1 && (
                    <UsersCells
                        curPage={curPage}
                        username="hamdysalem503_71627765"
                        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiY2xwams0dDdxMDAwNDJ2aGgzY244cjB6NVwiIiwiaWF0IjoxNzAxMzAyOTMwLCJleHAiOjE3MDM4OTQ5MzB9.mQYsIGIrhDX_aJsFNRzjFKBi18MiQVtVGgaP-tAmkto"
                    />
                )}
            </div>
            <Widget token={token}/>
        </div>
    );
};

export default SearchForUsersOrTweetsPage;
