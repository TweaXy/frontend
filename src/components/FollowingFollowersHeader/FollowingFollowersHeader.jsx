import './FollowingFollowersHeader.css';

const FollowingFollowersHeader = ({
    name,
    username,
    activePage,
    setActivePage,
    goBackToProfile,
}) => {
    return (
        <div className="following-followers-header-container">
            <div className="following-followers-header-user-info">
                <button
                    className="following-followers-header-go-back-btn"
                    onClick={goBackToProfile}
                >
                    🡠
                </button>
                <div className="following-followers-header-name-username-container">
                    <span className="following-followers-header-name">
                        {name}
                    </span>
                    <span className="following-followers-header-username">
                        {`@${username}`}
                    </span>
                </div>
            </div>
            <div className="following-followers-header-navigator">
                <div
                    className="following-followers-header-nav-element-container"
                    onClick={() => setActivePage(0)}
                >
                    <span
                        className={`${activePage == 0 && 'active-nav-element'}`}
                    >
                        Followers
                    </span>
                </div>
                <div
                    className="following-followers-header-nav-element-container"
                    onClick={() => setActivePage(1)}
                >
                    <span
                        className={`${activePage == 1 && 'active-nav-element'}`}
                    >
                        Following
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FollowingFollowersHeader;
