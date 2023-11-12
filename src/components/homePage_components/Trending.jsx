import "./Trending.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function Trending({ trend, tweetsCount }) {
  return (
    <div className="trending">
      <div className="trend-country-container">
        <div className="country">
          <span>Trending in Egypt</span>
        </div>
        <div className="options-container cian-hover">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="trend-container">
        <span>{trend}</span>
      </div>
      <div className="numbers-container">
        <span>{tweetsCount} posts</span>
      </div>
    </div>
  );
}
