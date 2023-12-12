import '../FollowingFollowersHeader/FollowingFollowersHeader.css';

const LikersHeader = ({
    name,
    username,
    curPage,
    setCurPage,
    navigateBack,
}) => {
    return (
        <div className="following-followers-header-container">
            <div className="following-followers-header-user-info">
                <button
                    className="following-followers-header-go-back-btn"
                    onClick={navigateBack}
                >
                    🡠
                </button>
                <div className="following-followers-header-name-username-container">
                    <span className="following-followers-header-name">
                        Post engagements
                    </span>
                </div>
            </div>
            <div className="following-followers-header-navigator">
                <div
                    className="following-followers-header-nav-element-container"
                    onClick={() => setCurPage(0)}
                >
                    <span className={`${curPage == 0 && 'active-nav-element'}`}>
                        Likes
                    </span>
                    
                </div>
                <div
                    className="following-followers-header-nav-element-container"
                    onClick={() => setCurPage(1)}
                >
                    <span className={`${curPage == 1 && 'active-nav-element'}`}>
                        Reposts
                    </span>
                    
                </div>
                <div
                    className="following-followers-header-nav-element-container"
                    onClick={() => setCurPage(2)}
                >
                    <span className={`${curPage == 2 && 'active-nav-element'}`}>
                        Quotes
                    </span>
                    
                </div>
            </div>
        </div>
    );
};

export default LikersHeader;
