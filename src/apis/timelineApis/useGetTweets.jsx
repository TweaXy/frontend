import { useEffect, useState } from 'react';

export default function useGetTweets(token, offset) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tweets, setTweets] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const fetchData = async () => {
            const lnk = `https://tweaxybackend.mywire.org/api/v1/home?limit=10&offset=${offset}`;
            try {
                const response = await fetch(lnk, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                const responseData = await response.json();
                if (responseData.status != "success") { 
                    setError(true);
                }
                else {
                    setTweets((prevTweets) => {
                        console.log(responseData.data.items);
                        setLoading(false);
                        return [...prevTweets, ...responseData.data.items];
                    });
                    setHasMore(responseData.data.items.length > 0);
                    setLoading(false);
                }
            }
            catch (error) {
                console.log(error);
                setError(true);
            }
        }

        fetchData();
    }, [token, offset]);

    return { loading, error, tweets, hasMore };
}
