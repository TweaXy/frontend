import "./Feed.css";
import FeedHeader from "./FeedHeader";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
export default function Feed() {
  return (
    <div className="feed">
      <FeedHeader feedHeader_acitve={0} />
      <TweetBox />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"7h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={5}
        reposts={10}
        likes={30}
        insights={"4K"}
      />

      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={0}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />
      <Tweet
        avatar={"myphoto.jpg"}
        username={"mohamed"}
        handle={"korydemo"}
        uploadTime={"6h"}
        tweetText={"Hello This is a Tweet :D"}
        replies={4}
        reposts={5}
        likes={10}
        insights={"2K"}
      />

      {/*Tweet */}
      {/*Tweet */}
      {/*Tweet */}
      {/*Tweet */}
      {/*Tweet */}
    </div>
  );
}
