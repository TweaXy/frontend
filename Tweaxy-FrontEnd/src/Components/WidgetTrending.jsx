import "./WidgetTrending.css";
import Trending from "./Trending";
export default function WidgetTrending() {
  return (
    <div className="widget-trending">
      <div className="header">
        <span className="header-text">What's happening</span>
      </div>
      <Trending trend={"Trend 1 !!"} tweetsCount={"240k"} />
      <Trending trend={"Trend 2 !!"} tweetsCount={"130k"} />
      <Trending trend={"Trend 3 !!"} tweetsCount={"100k"} />
      <Trending trend={"Trend 4 !!"} tweetsCount={"300k"} />
      {/* trending */}
      {/* trending */}
    </div>
  );
}
