
import './Feed.css'
import FeedHeader from './FeedHeader';
import TweetBox from './TweetBox'
import Tweet from './Tweet'
export default function Feed(){
    
    return(
        <div className="feed">  
        <FeedHeader feedHeader_acitve={0}/>
        <TweetBox/>
        <Tweet avatar={'myphoto.jpg'} username={'mohamed'}
        handle={'korydemo'} uploadTime={'7h'} tweetText={'Dof3ty enahrda shafoni wana bashrab sgaayr w mstnya ba2a el judgment bukraaa 🫠'}comments={5} reposts={10} likes={30} insights={'4K'}/>
       
            {/*Tweet */} 
            {/*Tweet */}
            {/*Tweet */}
            {/*Tweet */}
            {/*Tweet */}
        </div>
    );

}