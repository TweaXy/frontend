import './WidgetTrending.css';
import Trending from './Trending';
import { useEffect, useState } from 'react';
import { apiGetTrending } from '../../apis/TrendingAPIs/GetTrending';
export default function WidgetTrending({ token }) {
    const [trendings, setTrendings] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const fetchedTrendings = await apiGetTrending(token);
                setTrendings(fetchedTrendings);
                console.log('these are the trendings: ', trendings);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchTrending();
    }, []);

    let id = 1;
    return (
        <div className="widget-trending">
            <div className="header">
                <span className="header-text">What's happening</span>
            </div>
            {trendings.map((trending) => (
                <Trending
                    key={id++}
                    trend={trending.trend}
                    tweetsCount={trending.count}
                />
            ))}
        </div>
    );
}
