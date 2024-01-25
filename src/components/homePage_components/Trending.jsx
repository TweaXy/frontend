import './Trending.css';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomePageSelectors from '../../shared/selectors/HomePage.js';

export default function Trending({ trend, tweetsCount }) {

    const navigate = useNavigate();
    const handleClick = () => {
        console.log("trend is clicked");
        navigate(`/search/"${trend}"`, {state: {search: trend, isSearch: false}});
      };

    return (
        <div onClick={handleClick}
            className="trending"
            data-test={`${HomePageSelectors.TRENDING_ITEM}`}
        >
            <div className="trend-country-container">
                <div className="country">
                    <span>Trending in Egypt</span>
                </div>
                <div className="options-container cian-hover">
                    <MoreHorizIcon />
                </div>
            </div>
            <div
                className="trend-container"
                data-test={`${HomePageSelectors.TRENDING_TOPIC}`}
            >
                <span>{trend}</span>
            </div>
            <div
                className="numbers-container"
                data-test={`${HomePageSelectors.TRENDING_TOPIC_NUMBER}`}
            >
                <span>{tweetsCount} posts</span>
            </div>
        </div>
    );
}
