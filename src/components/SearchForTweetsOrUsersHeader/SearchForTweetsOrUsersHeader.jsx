import SearchBar from '../SearchBar/SearchBar';
import './SearchForTweetsOrUsersHeader.css';

const SearchForTweetsOrUsersHeader = ({
    searchedInput,
    activePage,
    setActivePage,
    goBack,
}) => {
    return (
        <div className="search-for-tweets-or-users-header-container">
            <div className="search-for-tweets-or-users-header-user-info">
                <button
                    className="search-for-tweets-or-users-header-go-back-btn"
                    onClick={goBack}
                >
                    🡠
                </button>
                <div className="search-for-tweets-or-users-header-name-username-container">
                    <SearchBar defaultText={searchedInput}/>
                </div>
            </div>
            <div className="search-for-tweets-or-users-header-navigator">
                <div
                    className="search-for-tweets-or-users-header-nav-element-container"
                    onClick={() => setActivePage(0)}
                >
                    <span
                        className={`${activePage == 0 && 'active-nav-element'}`}
                    >
                        Top
                    </span>
                </div>
                <div
                    className="search-for-tweets-or-users-header-nav-element-container"
                    onClick={() => setActivePage(1)}
                >
                    <span
                        className={`${activePage == 1 && 'active-nav-element'}`}
                    >
                        Latest
                    </span>
                </div>
                <div
                    className="search-for-tweets-or-users-header-nav-element-container"
                    onClick={() => setActivePage(2)}
                >
                    <span
                        className={`${activePage == 2 && 'active-nav-element'}`}
                    >
                        People
                    </span>
                </div>
                <div
                    className="search-for-tweets-or-users-header-nav-element-container"
                    onClick={() => setActivePage(3)}
                >
                    <span
                        className={`${activePage == 3 && 'active-nav-element'}`}
                    >
                        Media
                    </span>
                </div>
                <div
                    className="search-for-tweets-or-users-header-nav-element-container"
                    onClick={() => setActivePage(4)}
                >
                    <span
                        className={`${activePage == 4 && 'active-nav-element'}`}
                    >
                        Lists
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SearchForTweetsOrUsersHeader;
