const apiDeleteTweet = async (tweetId, token) => {
    const deleteTweetURL =
        'https://tweaxybackend.mywire.org/api/v1/interactions/' + tweetId;
    try {
        const response = await fetch(deleteTweetURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status != 'success') {
            console.log('cant Delete tweet');
        } else {
            console.log('Tweet Deleted');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

const apiDeleteRepost = async (tweetId, token) => {
    const deleteRepostURL =
        'https://tweaxybackend.mywire.org/api/v1/interactions/' + tweetId;
    try {
        const response = await fetch(deleteRepostURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status != 'success') {
            console.log('cant Delete Repost');
        } else {
            console.log('Repost Deleted');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export { apiDeleteTweet, apiDeleteRepost };
