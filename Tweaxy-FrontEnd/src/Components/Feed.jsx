
import './Feed.css'
import FeedHeader from './FeedHeader';
import TweetBox from './TweetBox'
import Tweet from './Tweet'
export default function Feed(){
    
    return(
        <div className="feed">  
        <FeedHeader feedHeader_acitve={0}/>
        <TweetBox/>
        <Tweet/>
            {/*Tweet */} 
            {/*Tweet */}
            {/*Tweet */}
            {/*Tweet */}
            {/*Tweet */}
        </div>
    );

}