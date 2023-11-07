import AvatarBox from "./AvatarBox";
import './Tweet.css'
export default function Tweet({}){
    
    
    return(
    <div className="tweet">
        <div className="repost"></div>
        <div className="tweet-container">
        <div className="avatar-container">
        {/* avatar */}
        </div>
        <div className="tweet-main">
        <div className="tweet-user"></div>
        <div className="tweet-text-container">
        <span className="tweet-text"></span>
        </div>
        {/* {tweetMedia&& <div className="tweet-media-container">
            
        </div>
         */}
        <div className="tweet-activity">
            <div className="tweet-icon"></div>
            <div className="tweet-icon"></div>
            <div className="tweet-icon"></div>
            <div className="tweet-icon"></div>
            <div className="tweet-save"></div>
            <div className="tweet-export"></div>
        </div>
        </div>
    </div>
    </div>
    
);}